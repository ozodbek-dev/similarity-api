"use client";


import { FC } from "react";
import SimpleBar from "simplebar-react";
import { nodejs, python } from "../helpers/documentation-code";
import "simplebar-react/dist/simplebar.min.css";
import Code from "./ui/Code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

const DocumentationTabs: FC = () => {
	return (
		<Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
			<TabsList>
				<TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
				<TabsTrigger value='python'>Python</TabsTrigger>
			</TabsList>
			<TabsContent value='nodejs'>
				<SimpleBar >
					<Code animated code={nodejs} language='javascript' show />
				</SimpleBar>
			</TabsContent>
			<TabsContent value='python'>
				<SimpleBar placeholder="" >
					<Code animated code={python} language='python' show />
				</SimpleBar>
			</TabsContent>
		</Tabs>
	);
};

export default DocumentationTabs;
