import mongoose from "mongoose";
import config from "./config";
import Card from "./model/Card";

const run = async () => {
	await mongoose.connect(config.db);
	const db = mongoose.connection;

	try {
		await db.dropCollection("cards");
	} catch (e) {
		console.log("Collections were not present, skipping drop...");
	}

	await Card.create(
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdwBr_ofrA-xwBLBU5WIFBgn23fEikUq72w&s",
			name: 'Lego',
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdwBr_ofrA-xwBLBU5WIFBgn23fEikUq72w&s",
			name: 'Lego',
		},
	);

	await db.close();
};

run().catch(console.error);
