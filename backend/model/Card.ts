import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CardSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: [true, "image are required"],
	},
});

const Card = mongoose.model("Card", CardSchema);
export default Card;
