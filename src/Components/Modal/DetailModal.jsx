import { Fragment } from "react";
import {

    Dialog,

} from "@material-tailwind/react";

const DetailModal = ({ open, handleOpen }) => {

    return (
        <Fragment>
            <Dialog open={open} size={"lg"} handler={handleOpen}>
                <div className="h-[30rem] mt-10">
                    <h1>Its a simple dialog.</h1>
                    <div >
                        <h3 className="bg-white">
                            The key to more success is to have a lot of pillows. Put it this way, it took me
                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                            luv.
                        </h3>

                    </div>
                    <div>
                        <button
                            onClick={handleOpen}
                            className="mr-1 btn btn-primary"
                        >
                            <span className="btn btn-primary">Back</span>
                        </button>
                    </div>
                </div>
            </Dialog>
        </Fragment>
    );
}
export default DetailModal