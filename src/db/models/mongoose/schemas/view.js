import mongoose from 'mongoose';
const { Schema } = mongoose;

const viewSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    isFeatures: {
      type: Boolean,
      default: true,
    },
    features: {
      type: Array,
      set: data => (data ? data : []),
    },
    links: {
      type: Array,
      set: data => (data ? data : []),
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
  }
);

viewSchema.path('title').validate(value => {
  const reg = /[A-Z]\w+/;
  return reg.test(String(value));
});

const View = mongoose.model('view', viewSchema);

export default View;
