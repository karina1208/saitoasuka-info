import React, { useRef,setActiveKey,activeKey } from "react"
import { Container ,Button} from "react-bootstrap"
import Songs from "./Songs"
import SenSection1 from "./SenSection1"
import Navigationbar from "./../Navigationbar"
import './custom.css'

class Senbatsu extends React.Component {

    

    render() {
        return (
            <>
            <Navigationbar />
            <div class="bg-image">
                <SenSection1 />
                <Songs/>
            </div>
            </>
        )

    }
}
export { Senbatsu }