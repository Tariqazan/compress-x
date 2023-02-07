import { Button, Card, Grid, Text, useTheme } from "@nextui-org/react";
import React from "react";
import Lock from '@/public/assets/main/fi_lock.svg';
import Image from "next/image";
import UploadIcon from "@/public/assets/main/upload.svg";
import GoogleDrive from "@/public/assets/main/google_drive.png";
import OneDrive from "@/public/assets/main/one_drive.png";
import Dropbox from "@/public/assets/main/dropbox.png";
import Url from "@/public/assets/main/fi_link.png";
import Link from "next/link";

const UploadFile = () => {
    const theme = useTheme();
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // handleFiles(e.dataTransfer.files);
            console.log("drop", e.dataTransfer.files[0])
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // handleFiles(e.target.files);
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <Text className="mulish" css={{
                        fontSize: theme.theme.fontSizes["2xl"],
                        textAlign: 'center',
                        fontWeight: theme.theme.fontWeights.medium,
                        lineHeight: theme.theme.lineHeights["2xl"],
                        fontStyle: 'normal',
                        color: '$lightBlue',
                        '@mdMax': {
                            fontSize: theme.theme.fontSizes["xl"]
                        }
                    }}>
                        Upload files
                    </Text>
                    <Grid className="flex-center">
                        <Image src={Lock} alt='lock_icon' className="lock_icon"></Image>
                        <Text className="mulish" css={{
                            margin: '20px 0',
                            fontSize: theme.theme.fontSizes["md"],
                            fontWeight: theme.theme.fontWeights.normal,
                            lineHeight: theme.theme.lineHeights["sm"],
                            fontStyle: 'normal',
                            color: '$babylightBlue',
                            '@mdMax': {
                                fontSize: theme.theme.fontSizes["sm"],
                            }
                        }}>
                            Your files are secure & private
                        </Text>
                    </Grid>
                    <div className="flex-center">
                        <Button className="mulish" color={"$lightBlue"} css={{
                            background: 'rgba(220, 180, 245, 0.4)',
                            fontStyle: 'normal',
                            fontWeight: theme.theme.fontWeights.bold,
                            fontSize: theme.theme.fontSizes["md"],
                            lineHeight: theme.theme.lineHeights["lg"],
                            width: '100%',
                            padding: '10px 0',
                            border: 0,
                            borderRadius: 0,
                            margin: '10px 15px 20px 0',
                            '@mdMax': {
                                fontSize: theme.theme.fontSizes["sm"],
                            }
                        }}>LOSLESS</Button>
                        <Button className="mulish" color={"$pink"} css={{
                            background: 'rgba(247, 235, 255, 0.3)',
                            fontStyle: 'normal',
                            fontWeight: theme.theme.fontWeights.bold,
                            fontSize: theme.theme.fontSizes["md"],
                            lineHeight: theme.theme.lineHeights["lg"],
                            color: '$pink',
                            width: '100%',
                            padding: '10px 0',
                            border: 0,
                            borderRadius: 0,
                            margin: '10px 15px 20px 0',
                            '@mdMax': {
                                fontSize: theme.theme.fontSizes["sm"],
                            }
                        }}>LOSY</Button>
                        <Button className="mulish" color={"$pink"} css={{
                            background: 'rgba(247, 235, 255, 0.3)',
                            fontWeight: theme.theme.fontWeights.bold,
                            fontSize: theme.theme.fontSizes["md"],
                            lineHeight: theme.theme.lineHeights["lg"],
                            color: '$pink',
                            width: '100%',
                            padding: '10px 0',
                            border: 0,
                            borderRadius: 0,
                            margin: '10px 15px 20px 0',
                            '@mdMax': {
                                fontSize: theme.theme.fontSizes["sm"],
                            }
                        }}>CUSTOM</Button>
                    </div>
                    <form className="dropbox" id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                            <Image src={UploadIcon} alt="upload-icon" />
                            <Text className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.medium,
                                fontSize: theme.theme.fontSizes["md"],
                                lineHeight: '18px',
                                color: '$lightBlue',
                                letterSpacing: '2px',
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                margin: '20px 0',
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["sm"],
                                }
                            }}>Drag & Drop your files here</Text>
                            <Text className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.medium,
                                fontSize: theme.theme.fontSizes["md"],
                                lineHeight: '19px',
                                color: '$babylightBlue',
                                textAlign: 'center',
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["sm"],
                                }
                            }}>or</Text>
                            <Button className="mulish" color={"primary"} css={{
                                background: 'linear-gradient(266.08deg, #3D318A 2.81%, #DCB4F5 94.62%)',
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.black,
                                fontSize: theme.theme.fontSizes["md"],
                                lineHeight: '20px',
                                borderRadius: '5px',
                                textAlign: 'center',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                padding: '15px 50px',
                                margin: '15px auto'
                            }} onClick={onButtonClick}>Browse File</Button>
                        </label>
                        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                        <div className="social-share-file">
                            <Link href={"#"} className="social-site">
                                <Image src={GoogleDrive} alt="GoogleDrive" /> <Text className="mulish" span css={{
                                    fontStyle: 'normal',
                                    fontWeight: theme.theme.fontWeights.medium,
                                    fontSize: theme.theme.fontSizes["lg"],
                                    lineHeight: theme.theme.lineHeights["md"],
                                    textAlign: 'center',
                                    color: '$babylightBlue',
                                    '@mdMax': {
                                        fontSize: theme.theme.fontSizes["md"],
                                    }
                                }}>Google Drive</Text>
                            </Link>
                            <Link href={"#"} className="social-site">
                                <Image src={OneDrive} alt="GoogleDrive" />  <Text className="mulish" span css={{
                                    fontStyle: 'normal',
                                    fontWeight: theme.theme.fontWeights.medium,
                                    fontSize: theme.theme.fontSizes["lg"],
                                    lineHeight: theme.theme.lineHeights["md"],
                                    textAlign: 'center',
                                    color: '$babylightBlue',
                                    '@mdMax': {
                                        fontSize: theme.theme.fontSizes["md"],
                                    }
                                }}>OneDrive</Text>
                            </Link>
                            <Link href={"#"} className="social-site">
                                <Image src={Dropbox} alt="GoogleDrive" /><Text className="mulish" span css={{
                                    fontStyle: 'normal',
                                    fontWeight: theme.theme.fontWeights.medium,
                                    fontSize: theme.theme.fontSizes["lg"],
                                    lineHeight: theme.theme.lineHeights["md"],
                                    textAlign: 'center',
                                    color: '$babylightBlue',
                                    '@mdMax': {
                                        fontSize: theme.theme.fontSizes["md"],
                                    }
                                }}>Dropbox</Text>
                            </Link>
                            <Link href={"#"} className="social-site">
                                <Image src={Url} alt="GoogleDrive" /><Text className="mulish" span css={{
                                    fontStyle: 'normal',
                                    fontWeight: theme.theme.fontWeights.medium,
                                    fontSize: theme.theme.fontSizes["lg"],
                                    lineHeight: theme.theme.lineHeights["md"],
                                    textAlign: 'center',
                                    color: '$babylightBlue',
                                    '@mdMax': {
                                        fontSize: theme.theme.fontSizes["md"],
                                    }
                                }}>via URL</Text>
                            </Link>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </>
    )
}

export default UploadFile;