import {
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { Fragment } from "react";
import { updateData } from "../../utils/functions";
import { Device } from "../Panel/Device/Device";
import IncludeExClude from "../Panel/IncludeExclude/IncludeExclude";
import PanelColorControl from "../Panel/PanelColorControl/PanelColorControl";
import PanelShadow from "../Panel/PanelShadow/PanelShadow";
import { BBoxControl } from "../Panel/BBoxControl/BBoxControl";

const StyleSettingsOne = ({ setAttributes, attributes, device }) => {
	const { spotsone, tooltipone } = attributes;
	return (
		<Fragment>
			<PanelBody initialOpen={false} title={__("Spots", "hotspot-block")}>
				<PanelRow>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<span>{__("Width", "hotspot-block")}</span>
						<Device />
					</div>
					<UnitControl
						style={{ width: "92px" }}
						units={["%"]}
						isUnitSelectTabbable
						value={spotsone.width[device]}
						min={1}
						max={700}
						onChange={(value) =>
							setAttributes({
								spotsone: updateData(spotsone, value, "width", device),
							})
						}
					/>
				</PanelRow>
				<PanelRow>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<span>{__("Height", "hotspot-block")}</span>
						<Device />
					</div>
					<UnitControl
						style={{ width: "92px" }}
						units={["%"]}
						isUnitSelectTabbable
						value={spotsone.height[device]}
						min={1}
						max={700}
						onChange={(value) =>
							setAttributes({
								spotsone: updateData(spotsone, value, "height", device),
							})
						}
					/>
				</PanelRow>
				<PanelRow>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<span>{__("Icon Size", "hotspot-block")}</span>
						<Device />
					</div>
					<UnitControl
						style={{ width: "92px" }}
						units={["%"]}
						isUnitSelectTabbable
						value={spotsone.iconSize[device]}
						min={1}
						max={200}
						onChange={(value) =>
							setAttributes({
								spotsone: updateData(spotsone, value, "iconSize", device),
							})
						}
					/>
				</PanelRow>

				<div style={{ position: "relative", marginTop: "20px" }}>
					<Device style={{position:"absolute",left:"50px",top:"2px"}} />
					<BBoxControl
						label={__("Padding", "hotspot-block")}
						values={spotsone.padding[device]}
						units={["px"]}
						resetValues={{
							left: "0px",
							right: "0px",
							top: "0px",
							bottom: "0px",
						}}
						onChange={(value) =>
							setAttributes({
								spotsone: updateData(spotsone, value, "padding", device),
							})
						}
					/>
				</div>

				<div className="mt-10">
					<PanelRow>
						<span>{__("Border Type", "hotspot-block")}</span>
						<SelectControl
							value={spotsone.borderType}
							options={[
								{ label: "None", value: "none" },
								{ label: "Solid", value: "solid" },
								{ label: "Double", value: "double" },
								{ label: "Dotted", value: "dotted" },
								{ label: "Dashed", value: "dashed" },
								{ label: "Groove", value: "groove" },
							]}
							onChange={(value) =>
								setAttributes({
									spotsone: updateData(spotsone, value, "borderType"),
								})
							}
						/>
					</PanelRow>
				</div>

				{spotsone.borderType !== "none" && (
					<Fragment>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<span>{__("Border Width", "hotspot-block")}</span>
								<Device />
							</div>
							<UnitControl
								style={{ width: "60px" }}
								units={["%"]}
								isUnitSelectTabbable
								value={spotsone.borderWidth[device]}
								min={0}
								max={50}
								onChange={(value) =>
									setAttributes({
										spotsone: updateData(
											spotsone,
											value,
											"borderWidth",
											device
										),
									})
								}
							/>
						</div>
						<PanelColorControl
							label={__("Border Color", "hotspot-block")}
							value={spotsone.borderColor}
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							renderFunction={(value) =>
								setAttributes({
									spotsone: {
										...spotsone,
										borderColor: value,
									},
								})
							}
						/>
					</Fragment>
				)}

				<div style={{ position: "relative", marginTop: "20px" }}>
					<Device style={{ position: "absolute", left: "90px" }} />
					<BBoxControl
						label={__("Border Radius", "hotspot-block")}
						values={spotsone.borderRadius[device]}
						units={["px"]}
						resetValues={{
							left: "0px",
							right: "0px",
							top: "0px",
							bottom: "0px",
						}}
						onChange={(value) =>
							setAttributes({
								spotsone: updateData(spotsone, value, "borderRadius", device),
							})
						}
					/>
				</div>

				<IncludeExClude
					options={["normal", "hover"]}
					value={spotsone.hover}
					renderFunction={(value) =>
						setAttributes({
							spotsone: { ...spotsone, hover: value },
						})
					}
				/>
				{spotsone.hover === "normal" && (
					<Fragment>
						<PanelColorControl
							label="Text Color"
							value={spotsone.iconColor}
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							renderFunction={(value) =>
								setAttributes({
									spotsone: { ...spotsone, iconColor: value },
								})
							}
						/>
						<PanelColorControl
							label="Background Color"
							value={spotsone.bgColor}
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							renderFunction={(value) =>
								setAttributes({
									spotsone: { ...spotsone, bgColor: value },
								})
							}
						/>
					</Fragment>
				)}
				{spotsone.hover === "hover" && (
					<Fragment>
						<PanelColorControl
							label="Text Color"
							value={spotsone.hoverColor.icon}
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							renderFunction={(value) =>
								setAttributes({
									spotsone: {
										...spotsone,
										hoverColor: {
											...spotsone.hoverColor,
											icon: value,
										},
									},
								})
							}
						/>
						<PanelColorControl
							label="Background Color"
							value={spotsone.hoverColor.bg}
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							renderFunction={(value) =>
								setAttributes({
									spotsone: {
										...spotsone,
										hoverColor: {
											...spotsone.hoverColor,
											bg: value,
										},
									},
								})
							}
						/>
						<PanelColorControl
							label="Border Color"
							value={spotsone.hoverColor.border}
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							renderFunction={(value) =>
								setAttributes({
									spotsone: {
										...spotsone,
										hoverColor: {
											...spotsone.hoverColor,
											border: value,
										},
									},
								})
							}
						/>
					</Fragment>
				)}
			</PanelBody>

			<PanelBody initialOpen={false} title={__("Tooltip", "hotspot-block")}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<span>{__("Width", "hotspot-block")}</span>
					<UnitControl
						style={{ width: "92px" }}
						units={[{ label: "px", value: "px" }]}
						isUnitSelectTabbable
						value={tooltipone.width}
						min={1}
						max={800}
						onChange={(value) =>
							setAttributes({
								tooltipone: {
									...tooltipone,
									width: value,
								},
							})
						}
					/>
				</div>
				<div style={{ position: "relative", marginTop: "20px" }}>
					<Device style={{ position: "absolute", left: "60px" }} />
					<BBoxControl
						label={__("Padding", "hotspot-block")}
						values={tooltipone.padding[device]}
						units={[{ label: "px", value: "px" }]}
						resetValues={{
							left: "0px",
							right: "0px",
							top: "0px",
							bottom: "0px",
						}}
						onChange={(value) =>
							setAttributes({
								tooltipone: updateData(tooltipone, value, "padding", device),
							})
						}
					/>
				</div>

				<div style={{ position: "relative", marginTop: "20px" }}>
					<Device style={{ position: "absolute", left: "90px" }} />
					<BBoxControl
						label={__("Border Radius", "hotspot-block")}
						values={tooltipone.borderRadius[device]}
						units={[{ label: "px", value: "px" }]}
						resetValues={{
							left: "0px",
							right: "0px",
							top: "0px",
							bottom: "0px",
						}}
						onChange={(value) =>
							setAttributes({
								tooltipone: updateData(
									tooltipone,
									value,
									"borderRadius",
									device
								),
							})
						}
					/>
				</div>

				<PanelColorControl
					label={__("Text Color", "hotspot-block")}
					value={tooltipone.textColor}
					colors={[
						{ name: "red", color: "#f00" },
						{ name: "white", color: "#fff" },
						{ name: "blue", color: "#00f" },
					]}
					renderFunction={(value) =>
						setAttributes({
							tooltipone: { ...tooltipone, textColor: value },
						})
					}
				/>
				<PanelColorControl
					label={__("Background Color", "hotspot-block")}
					value={tooltipone.bgColor}
					colors={[
						{ name: "red", color: "#f00" },
						{ name: "white", color: "#fff" },
						{ name: "blue", color: "#00f" },
					]}
					renderFunction={(value) =>
						setAttributes({
							tooltipone: { ...tooltipone, bgColor: value },
						})
					}
				/>

				<PanelShadow
					label={__("Box Shadow", "hotspot-block")}
					value={tooltipone.boxShadow}
					onChange={(value) =>
						setAttributes({
							tooltipone: { ...tooltipone, boxShadow: value },
						})
					}
				/>
			</PanelBody>
		</Fragment>
	);
};

export default withSelect((select) => {
	return {
		device: select("core/edit-post")
			.__experimentalGetPreviewDeviceType()
			?.toLowerCase(),
	};
})(StyleSettingsOne);
