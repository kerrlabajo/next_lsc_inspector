'use client'

import React, { useState, useEffect } from 'react';
import Container from '@components/container'
import Button from '@components/Button/page'
import FileUpload from '@components/Button/fileUpload'
import Modal from '@components/Modal/page'
import Toggle from '@components/Button/toggle'
import useUserStore from '../../useStore'
import useUpload from '@hooks/useUpload'
import axios from 'axios'
import useAnalyze from '@hooks/useAnalyze';

const Main = () => {
	const [isModalOpen, setIsModalOpen] = useState(true)
	const { user, isAuthenticated } = useUserStore()
	const { uploadFile } = useUpload()
  const { analyzeFile } = useAnalyze()
	const [file, setFile] = useState(null)
	const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
  const [analyzedImage, setAnalyzedImage] = useState(null)
  const [selectedModel, setSelectedModel] = useState('General')
	const authorization =  user.user.access_token
	const handleFileUpload = async () => {
		if(file){
			const formData = new FormData()
			formData.append('file', file) //works

			const response = await uploadFile({
				body: formData,
				headers: authorization
			});
			if (response) {
				console.log('Image uploaded successfully')
				setUploadedImageUrl(response.url)
			}else{
				console.error('Image upload not successful')
			}
		}else{
			console.error('No file selected')
		}
	};

  const handleSelectModel = (modelName) => {
    // Add your logic here to handle the selected model
    setSelectedModel(modelName);
    setIsModalOpen(false)
  }
  const handleAnalyze = async () => {
    if (uploadedImageUrl) {
        try {
            const response = await analyzeFile({
                fileUrl: uploadedImageUrl
            }, authorization)

            if (response.status === 201) {
                console.log('Image analyzed successfully');
                setAnalyzedImage(response.data); // Assuming response.data contains the analyzed data
            } else {
                console.error('Image analyze unsuccessful');
            }
        } catch (error) {
            console.error('Error analyzing file:', error.message);
        }
    } else {
        console.error('No file selected');
    }
  }

	useEffect(() => {
    // This block of code will run whenever either uploadedImageUrl or analyzedImage changes.
    // It will log the updated URLs to the console.
    if (uploadedImageUrl) {
        console.log('Uploaded Image URL:', uploadedImageUrl);
    }

    if (analyzedImage) {
        console.log('Analyzed Image URL:', analyzedImage);
    }
}, [uploadedImageUrl, analyzedImage]);

	//console.log(headers.authorization)
	const renderContent = () => {
		return (
			<div>
				<div className="flex flex-col mb-[20px]">
					<div className="w-full flex justify-end mb-[20px]">
						<Toggle title="Use custom weights" />
					</div>
					<h1 className="font-bold text-[20px]">Model</h1>
					<span className="text-gray-400">Select from any from our pre-defined model you want to use.</span>
					<ul className="flex py-[20px] gap-3">
						<li className="w-fit text-gray-500 px-[10px] py-[5px] cursor-pointer rounded-md border border-gray-300 hover:border-green-300 hover:text-green-500">
							<span className="" onClick={handleSelectModel("General")}>General</span>
						</li>
						<li className="w-fit text-gray-500 px-[10px] py-[5px] cursor-pointer rounded-md border border-gray-300 hover:border-green-300 hover:text-green-500">
							<span className="" onClick={handleSelectModel("LaserSolder")}>Laser Solder</span>
						</li>
					</ul>
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold text-[20px]">Upload your own model</h1>
					<span className="text-gray-400">You can add your own custom dataset to be used in the AI model.</span>
					<FileUpload />
				</div>
			</div>
		)
	}

	return (
    <>
      <Container>
        <div className="h-[100vh] float-left text-neutral-900 w-full justify-center p-[20px]">
          <div className="w-full flex flex-col gap-x-1 items-left justify-between mb-4 h-48 rounded shadow p-6">
            <h1 className="text-5xl font-bold">Upload your image</h1>
            <form
              id="fileUploadForm"
              method="POST"
              encType="multipart/form-data"
              className="flex justify-between"
            >
              <input
                type="file"
                name="file"
                accept=".txt, .pdf, .png, .jpg, .jpeg, .gif"
                onChange={({ target }) => {
                  setFile(target.files[0]);
                }}
              />
              <Button
                title="Upload"
                style=" bg-green-400 text-white hover:bg-green-500"
                onClick={handleFileUpload}
              />
            </form>
          </div>
          {uploadedImageUrl && (
            <div className="w-full flex flex-row gap-x-36 mb-4 rounded shadow p-6">
              <img
                className="flex-shrink-0 w-1/3 h-1/2 object-cover"
                src={uploadedImageUrl}
                alt="Uploaded"
              />
              <div className="flex flex-col flex-grow items-start">
                <div className="flex items-center mb-2">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Filename:
                  </p>
                  <p>test</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Dimensions:
                  </p>
                  <p>test</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Size:
                  </p>
                  <p>test</p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Extension:
                  </p>
                  <p>test</p>
                </div>
              </div>
              <Button
                title="Analyze"
                style=" bg-green-400 text-white hover:bg-green-500 ml-auto"
                onClick={ handleAnalyze}
              />
            </div>
          )}
          {analyzedImage && (
            <div className="w-full flex flex-row gap-x-36 mb-4 rounded shadow p-6">
              <img
                className="flex-shrink-0 w-1/3 h-1/2 object-cover"
                src={analyzedImage.url}
                alt="Uploaded"
              />
              <div className="flex flex-col flex-grow items-start">
                <div className="flex items-center mb-2">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Filename:
                  </p>
                  <p>test</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Dimensions:
                  </p>
                  <p>test</p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Size:
                  </p>
                  <p>test</p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold mr-4" style={{ width: "100px" }}>
                    Extension:
                  </p>
                  <p>test</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {user && isAuthenticated && isModalOpen && (
          <Modal
            title="Setup your AI model"
            onClose={() => {
              setIsModalOpen(!isModalOpen);
            }}
            content={renderContent}
            footer={() => {
              return (
                <div className="w-full flex justify-end">
                  <Button
                    style={" bg-green-400 text-white ml-[20px]"}
                    title="Continue"
                    onClick={() => {
                      setIsModalOpen(!isModalOpen);
                    }}
                  />
                </div>
              );
            }}
          />
        )}
      </Container>
    </>
  );
}

export default Main
