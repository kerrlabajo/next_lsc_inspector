  "use client";

  import Container from "@components/container";
  import React, { useState, useEffect } from "react";
  import TextInput from "@components/textInput";
  import Link from "next/link";
  import Button from "@components/Button/page";
  import ProfilePictureUpload from "@components/profilepictureUpload";
  import EditIcon from "@mui/icons-material/Edit";
  import useUserStore from '../../useStore'
  import useEditProfilePicture from "@hooks/useEditProfilePicture";

  const Profile = () => {
    const { user, isAuthenticated } = useUserStore()
    const [username, setUsername] = useState(null);
    const [errorUsername, setErrorUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const {uploadPicture} = useEditProfilePicture();
    const [loading, setLoading] = useState(false);

    //temporary delete when final
    let userId;
    let authorization;
    if (user) {
      userId = user.user.id;
      authorization = user.user.access_token;
    }

    useEffect(() => {
      if (uploadedImage) {
        console.log("Uploaded Image in profile:", uploadedImage);
      }
    }, [uploadedImage]);

    const handleSaveChanges = async () => {
        if(uploadedImage){
            const formData = new FormData();
            formData.append("profile_image", uploadedImage);
            const response1 = await uploadPicture(userId, authorization, formData)
            setLoading(true)//insert loading skeleton
            if(response1){
                console.log(response1);
            }
        }
        setLoading(false)
    }
    return (
      <>
        <div className="min-h-[100vh] float-left text-neutral-900 w-full justify-center p-[20px]">
          <h1 className="font-bold text-3xl mb-4">Profile</h1>
          <Container>
            <span className="float-right text-gray-500 hover:underline">
              <a href="/" className="mr-1">
                test
              </a>
              <EditIcon style={{ fontSize: `16px`, marginTop: "-3px" }} />
            </span>

            <ProfilePictureUpload setUploadedImage={setUploadedImage} />
            <form className="space-y-4 md:space-y-6 flex flex-col" action="#">
              <div>
                <div className="flex flex-row mb-8">
                  <div className="w-1/2 mr-4">
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Username
                    </label>
                    <TextInput
                      type="username"
                      placeholder="Username"
                      value={username}
                      onChange={(username, errorUsername) => {
                        setUsername(username);
                        setErrorUsername(errorUsername);
                      }}
                      validation={{
                        type: "text_without_space",
                        size: 2,
                        column: "Username",
                        error: errorUsername,
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email Address
                    </label>
                    <TextInput
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(email, errorEmail) => {
                        setEmail(email);
                        setErrorEmail(errorEmail);
                      }}
                      validation={{
                        type: "text_without_space",
                        size: 2,
                        column: "Email",
                        error: errorEmail,
                      }}
                    />
                  </div>
                </div>
                <div className="flex mb-4 mr-4">
                  <div className="w-1/2 mr-4">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <TextInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(password, errorPassword) => {
                        setPassword(password);
                        setErrorPassword(errorPassword);
                      }}
                      validation={{
                        type: "text_without_space",
                        column: "Password",
                        size: 6,
                        error: errorPassword,
                      }}
                    />
                  </div>
                </div>
                <div className="flex mb-24 mr-4">
                  <div className="w-1/2 mr-4">
                    <div className="flex items-center h-5 justify-end  mt-[-5px]">
                      <Link
                        href="change-password"
                        className="text-sm font-light text-gray-500 hover:underline text-[12px] !pr-[-2px]"
                      >
                        Change Password
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center ">
                    <Button
                      title="Save Changes"
                      style=" w-1/4 bg-green-400 text-white hover:bg-green-500 h-[40px] justify-center"
                      onClick={() => {
                        handleSaveChanges();
                      }}
                    />
                </div>
              </div>
            </form>
          </Container>
        </div>
      </>
    );
  };

  export default Profile;
