import React from "react";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import TeamInfo from "../TeamInfo";
const { Header, Content, Footer, Sider } = Layout;




const nav_items = [
	{
		key: "1",
		icon: React.createElement(VideoCameraOutlined),
		label: "All teams",
	},
	{
		key: "2",
		icon: React.createElement(VideoCameraOutlined),
		label: "All teams",
	},
];
console.log('🪳 ~ file: index.jsx:36 ~ nav_items||', nav_items);


const AntMain = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["4"]}
					items={nav_items}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<h1 className="text-3xl text-blue-800 uppercase">
						Vòng quay may mắn PES
					</h1>
				</Header>
				<Content
					style={{
						margin: "24px 16px 0",
					}}
				>
					<p className="text-lg caret-sky-900 uppercase">danh sách các đội</p>
					<TeamInfo/>
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					Ant Design ©{new Date().getFullYear()} Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};
export default AntMain;
