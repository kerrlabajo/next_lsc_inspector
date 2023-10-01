import React, { useEffect, useState } from 'react';

function ProfilePictureUpload() {
  const [profileImage, setProfileImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [temporaryProfPIc, setTemporaryProfPIc] = useState(null)

  useEffect(() => {
    if (profileImage) {
        console.log('Profile Image:', profileImage)
    }
  }, [profileImage])
  return (
    <div className="profile-picture-input text-center p-4">
        <div className='flex flex-col items-center'>
            <img style={{width:"200px", height:"200px", borderRadius:"50%", objectFit:"cover", border:"4px solid green"}}
             src={temporaryProfPIc !=null ? temporaryProfPIc : "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dbf6812f59e5080cf420f1056bfceb66f7d6a43a8df19ace503ea70596afc0ff._RI_TTW_.jpg"} alt='Profile Image'/>

            <input
                type="file"
                name="file"
                accept=".txt, .pdf, .png, .jpg, .jpeg, .gif"
                onChange={({ target }) => {
                    const file  = target.files[0]
                    if(file && file.type.substring(0,5)==="image"){
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            setTemporaryProfPIc(e.target.result);
                        };
                        reader.readAsDataURL(file);

                        setUploadedImage(file);
                    }else{
                        setUploadedImage(null);
                    }
                }}
            />
        </div>
    </div>
  );
}

export default ProfilePictureUpload;