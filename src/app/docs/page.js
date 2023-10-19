'use client'

import React, { useState } from 'react'
import Container from '@components/container'
import Link from 'next/link'

export default function Docs() {
	const [active, setActive] = useState('Getting Started')
	return (
		<Container style=" text-neutral-900 mt-[100px] flex justify-center">
			<div className="w-[80%] flex gap-x-1 items-left justify-between mb-44 p-4">
				<div className="w-[20%] h-full flex flex-col gap-4 text-sm sticky">
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Introduction</h1>
						<div className="">
							<span
								className={`border-l-[2px] ${
									active == 'Getting Started' ? `font-semibold border-primary text-primary` : `border-gray-900 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Getting Started
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Create a New Workspace</h1>
						<div className="border-l border-gray-700 flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Workspace Setup
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Create a project in your workspace
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Upload Data with the Web Interface</h1>
						<div className="border-l border-gray-700 flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Create a dataset
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Create a Dataset Version
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Export Dataset Version
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Annotation</h1>
						<div className=" flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Drag and Select
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Class Selection
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold">Custom Training</h1>
						<div className=" flex flex-col">
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								Open Google Collab
							</span>
							<span
								className={`border-l-[1px] ${
									active == 'Signin' ? `font-semibold border-primary text-primary` : `border-gray-700 text-gray-700`
								} hover:text-primary cursor-pointer pl-3 py-1`}
							>
								CLI
							</span>
						</div>
					</div>
				</div>
				<div className="border-l w-[80%] pl-12 h-full flex flex-col gap-14">
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl text-primary font-bold">Create a New Workspace</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								After log in, to create a new Workspace, hover over the + icon and click the + Add Workspace button on the nav menu after you log into
								Roboflow.
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold">Workspace Setup</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								When you create a new Workspace, you need to choose a plan for the Workspace. To learn more about the available plans you can check
								out the Plans and Pricing section.
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold">Create a project in your workspace</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								To start building a computer vision model, you first need to create a Project. A Project contains all of your data, dataset versions,
								and models for a given task. First, go to the Roboflow dashboard. Then, click{' '}
								<span className="bg-gray-100 rounded text-sm p-1">&apos;Create New Project&apos;</span>:
							</span>
							<span className="my-6"> You will be asked to specify:</span>
							<ol className="list-decimal pl-10">
								<li>
									<b>A project type:</b> Here is a brief summary of each project type:
									<ol className="list-decimal pl-6">
										<li>
											<b>Object Detection: </b>Find the location of objects in an image.
										</li>
										<li>
											<b>Single-Label Classification:</b> Given a limited set of categories, assign a label to an image.
										</li>
										<li>
											<b>Multi-Label Classification: </b>Given a limited set of categories, assign an arbitrary number of labels that are relevant to
											the image.
										</li>
										<li>
											<b>Instance Segmentation:</b> To the pixel level, find the location of objects in an image.
										</li>
										<li>
											<b>Semantic Segmentation:</b> To the pixel level, find the location of objects in an image and create unique references for each
											object found.
										</li>
									</ol>
								</li>
								<li>
									<b>A project name:</b> The name of your project.
								</li>
								<li>
									<b>What you are detecting:</b> A label that summarizes what you are detecting.
								</li>
							</ol>
							<span className="py-6">When you have specified these values, submit the form to create the project.</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl text-primary font-bold">Upload Data with the Web Interface</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								To upload data, first create a project if you do not have one already. When you first create a project, you will be asked to upload
								images:
							</span>
							<span className="mt-6">If you already have a project, click &apos;Upload&apos; in the project sidebar to upload images.</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold">Create a dataset version for use in training a model</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								A dataset (also called a project Version) is a point-in-time snapshot of your dataset. By keeping track of exactly which images,
								preprocessing, and augmentation steps were used in each iteration of your model you maintain the ability to reproduce the results and
								scientifically test across various models and frameworks while remaining confident that the results are attributable to the model
								changes and not due to a bug in the data pipeline.
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold">Create a Dataset Version</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								To create a dataset version, click &apos;Versions&apos; in the sidebar associated with your Roboflow project. Then, click
								&apos;Generate New Version&apos;. From this page, you can set a train/test/valid split and specify preprocessing steps and
								augmentations for your new dataset version.
							</span>
							<span className="mt-4">
								Once you have specified the preprocessing steps and augmentations you want to apply to your data, click &apos;Generate&apos;. This
								will generate a new dataset version. You can then use this dataset version to train a model in Roboflow. You can also export your
								dataset for use in training a model manually.
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold">Export Dataset Version</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								To access this dataset, click &apos;Versions&apos; in the sidebar associated with your Roboflow project. Then select the dataset
								version that you want to export and click &apos;Export Dataset&apos;.
							</span>
							<span className="mt-4">
								From this page, you can select which format this dataset will be used and select &apos;show download code&apos; to get your API key,
								and other details, otherwise, you can also download the dataset via zip file.
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl text-primary font-bold">Annotation</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								You can access the labeling interface by selecting an image from the Assign or Dataset pages on the Roboflow dashboard. On the
								right-hand side of the labeling interface, you will find the toolbar. The toolbar has many features you can use for annotating images.
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold">Drag and Select</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>Represented by a hand icon, this feature allows you to select, edit, and drag individual annotations.</span>
							<ul className="list-disc pl-10">
								<li>
									<b>Single-click</b> an existing bounding box to select it. Once selected, you can change a bounding box&apos;s size with the
									circular white handles that appear on its corners and on each side. Or use the class editor to change the box&apos;s label.
								</li>
								<li>
									<b>Drag a box</b> to move it.
								</li>
								<li>
									<b>Drag the background</b> to pan.
								</li>
								<li>
									<b>Click the background</b> to deselect all boxes.
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold">Drag and Select</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								When an image is selected, the <b>Class Selector</b> will appear. It contains the following options for choosing the label of a
								bounding box:
							</span>
							<ul className="list-disc pl-10">
								<li>
									<b>Textfield</b> to create a new class or filter existing classes.
								</li>
								<li>
									<b>Buttons</b> to save or discard your changes.
								</li>
								<li>
									<b>Class List</b> of the existing classes in the dataset (filtered by the text field and with the active option highlighted in
									purple) and, sometimes, a &quote;Create class&quote; option if the text you typed does not match an existing class.
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl text-primary font-bold">Use Custom Training Notebooks</h1>
						<div className=" border-gray-700 flex flex-col">
							<span className={``}>
								To get your custom pre-trained model, it must be trained in one of the provided notebooks from Roboflow to have full configuration of
								your dataset.
							</span>
							<Link
								href="https://github.com/roboflow/notebooks/blob/main/notebooks/train-yolov8-object-detection-on-custom-dataset.ipynb"
								className="text-blue-400 cursor-pointer hover:underline"
							>
								https://github.com/roboflow/notebooks/blob/main/notebooks/train-yolov8-object-detection-on-custom-dataset.ipynb
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
