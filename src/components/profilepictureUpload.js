import React, { useEffect, useState } from "react";
import useUserStore from "../useStore";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function ProfilePictureUpload({ setUploadedImage }) {
  const [profileImage, setProfileImage] = useState(null);
  const [temporaryProfPIc, setTemporaryProfPIc] = useState(null);
  const { user, isAuthenticated } = useUserStore();

  useEffect(() => {
    if (temporaryProfPIc === null && user && user.user.profile_image) {
      setTemporaryProfPIc(user.user.profile_image);
      console.log(user)
    }
  }, [user, temporaryProfPIc]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTemporaryProfPIc(e.target.result);
      };
      reader.readAsDataURL(file);

      setUploadedImage(file); // Use the prop to pass the uploaded image
    } else {
      setUploadedImage(null);
    }
  };

  return (
    <div className="profile-picture-input text-center p-4">
      <div className="flex flex-col items-center">
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid green",
          }}
          src={
            temporaryProfPIc != null
              ? temporaryProfPIc
              : "https://i.imgflip.com/6yvpkj.jpg"
          }
          alt="Profile Image"
        />

        <label htmlFor="file" className="custom-file-upload mt-36 ml-36" style={
          {
            background: "#48BF91",
            border: "6px solid #FFFFFF",
            borderRadius: "50%",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "24px",
            height: "50px",
            width: "50px",
            position: "absolute",
          }
        }>
          <CameraAltIcon fontSize="large" style={{
            color: "#FFFFFF",
          }} />
        </label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".txt, .pdf, .png, .jpg, .jpeg, .gif"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default ProfilePictureUpload;
