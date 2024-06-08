import {
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "react";

import { withSelect } from "@wordpress/data";
import { updateData } from "../../utils/functions";
import { BBoxControl } from "../Panel/BBoxControl/BBoxControl";
import { Device } from "../Panel/Device/Device";
import PanelColorControl from "../Panel/PanelColorControl/PanelColorControl";
import PanelShadow from "../Panel/PanelShadow/PanelShadow";
import StyleSettingsOne from "./StyleSettingsOne";
const StyleSettings = ({ attributes, setAttributes, device }) => {
	const { image } = attributes;
	return (
		<Fragment>
			<PanelBody initialOpen={true} title={__("Image", "hotspot-block")}>
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
						value={image.width[device]}
						min={1}
						max={100}
						onChange={(value) =>
							setAttributes({
								image: updateData(image, value, "width", device),
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
						value={image.height[device]}
						min={1}
						max={1000}
						onChange={(value) =>
							setAttributes({
								image: updateData(image, value, "height", device),
							})
						}
					/>
				</PanelRow>
				<div style={{ position: "relative", marginTop: "20px" }}>
					<Device style={{ position: "absolute", left: "60px" }} />
					<BBoxControl
						label={__("Padding", "hotspot-block")}
						values={image.padding[device]}
						units={["px"]}
						resetValues={{
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
						}}
						onChange={(value) =>
							setAttributes({
								image: updateData(image, value, "padding", device),
							})
						}
					/>
				</div>
				<div className="mt-10">
					<PanelRow>
						<span>{__("Border Type", "hotspot-block")}</span>
						<SelectControl
							value={image.border}
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
									image: { ...image, border: value },
								})
							}
						/>
					</PanelRow>
				</div>

				{image.border !== "none" && (
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
									gap: "4px",
								}}
							>
								<span>{__("Border Width", "hotspot-block")}</span>
								<Device />
							</div>
							<UnitControl
								style={{ width: "92px" }}
								units={["%"]}
								isUnitSelectTabbable
								value={image.borderWidth[device]}
								min={0}
								max={50}
								onChange={(value) =>
									setAttributes({
										image: updateData(image, value, "borderWidth", device),
									})
								}
							/>
						</div>
						<PanelColorControl
							label={__("Border Color", "hotspot-block")}
							value={image.borderColor}
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							renderFunction={(value) =>
								setAttributes({
									image: { ...image, borderColor: value },
								})
							}
						/>
					</Fragment>
				)}

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
							gap: "4px",
						}}
					>
						<span>{__("Border Radius", "hotspot-block")}</span>
						<Device />
					</div>
					<UnitControl
						style={{ width: "92px" }}
						units={["%"]}
						isUnitSelectTabbable
						value={image.borderRadius[device]}
						min={0}
						max={100}
						onChange={(value) =>
							setAttributes({
								image: updateData(image, value, "borderRadius", device),
							})
						}
					/>
				</div>

				<PanelShadow
					label={__("Box Shadow", "hotspot-block")}
					value={image.boxShadow}
					onChange={(value) =>
						setAttributes({ image: { ...image, boxShadow: value } })
					}
				/>
			</PanelBody>
			<StyleSettingsOne attributes={attributes} setAttributes={setAttributes} />
		</Fragment>
	);
};
export default withSelect((select) => {
	return {
		device: select("core/edit-post")
			.__experimentalGetPreviewDeviceType()
			?.toLowerCase(),
	};
})(StyleSettings);
