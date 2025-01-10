// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { v4 as uuidv4 } from 'uuid';

// const s3 = new S3Client({
//   credentials: {
//     accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID || '',
//     secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY || '',
//   },
//   region: 'us-east-1', // Replace with your AWS region
// });

// export const uploadToS3 = async (file: any, originalFileName: any) => {
//   console.log("s3", file);
  
//   const uniqueFileName = `${uuidv4()}-${originalFileName}`;

//   const params = {
//     Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
//     Key: `public/resumes/${uniqueFileName}`, // Set your desired path
//     Body: file,
//   };

//   try {
//     const command = new PutObjectCommand(params);
//     const response = await s3.send(command);

//     console.log("File is uploaded successfully.");
//     return `https://central-school-international-resumes.s3.amazonaws.com/public/resumes/${uniqueFileName}`;
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     throw error;
//   }
// };
