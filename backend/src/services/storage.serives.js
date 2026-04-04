const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const response = await client.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.png",
  });

  return response;
}

module.exports = uploadFile;
