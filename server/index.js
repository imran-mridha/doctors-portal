const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dmnves2.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const appointmentOptionsCollecton = client
      .db("doctorsPortal")
      .collection("appointmentOptions");

    const bookingsCollecton = client.db("doctorsPortal").collection("bookings");

    app.get("/appointmentOptions", async (req, res) => {
      const date = req.query.date;
      console.log(date);
      const query = {};
      const options = await appointmentOptionsCollecton.find(query).toArray();
      const bookingQuery = { appoinmentDate: date };
      const alreadyBooked = await bookingsCollecton
        .find(bookingQuery)
        .toArray();

      options.forEach((option) => {
        const optionBooked = alreadyBooked.filter(
          (book) => book.treatment === option.name
        );

        const bookedSlots = optionBooked.map((book) => book.slot);

        const remainingSlots = option.slots.filter(
          (slot) => !bookedSlots.includes(slot)
        );
        option.slots = remainingSlots;

        // console.log(date,option.name,remainingSlots.length);
      });
      res.send(options);
    });

    app.get("/v2/appointmentOptions", async (req, res) => {
      const date = req.query.date;

      const options = await appointmentOptionsCollecton.aggregate([
        {
          $lookup: {
            from: "bookings",
            localField: "name",
            foreignField: "treatment",
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$appoinmentDate", date],
                  },
                },
              },
            ],
            as: "booked",
          },
        },
        {
          $project: {
            name: 1,
            slots: 1,
            booked: {
              $map: {
                input: "$booked",
                as: "book",
                in: '$$book.slot',
              },
            },
          },
        },
        {
          $project: {
            name: 1,
            slots: {
              $setDifference: ['$slots', '$booked']
            }
          }
        }
      ]).toArray();
      res.send(options)
    });

    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      // console.log(booking);
      const query = {
        appoinmentDate : booking.appoinmentDate,
        treatment: booking.treatment,
        email: booking.email
      }
      const alreadyBooked = await bookingsCollecton.find(query).toArray()

      if(alreadyBooked.length){
        const message = `You already have a booking ${booking.treatment} on ${booking.appoinmentDate}`
       return res.send({acknowledged: false, message})
      }
      const result = await bookingsCollecton.insertOne(booking);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Doctors portal server running....");
});

app.listen(port, () => {
  console.log("Server Running on port", port);
});
