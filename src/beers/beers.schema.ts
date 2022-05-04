import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BeersDocument = Beers & Document;

@Schema({
  timestamps: true,
})
export class Beers {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: [String], required: true })
  ingredients: string[];

  @Prop({ type: Number, required: true })
  abv: number;
}

export const BeersSchema = SchemaFactory.createForClass(Beers);
