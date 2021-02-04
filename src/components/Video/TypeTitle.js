import React from "react"

const TypeTitle = ({ page, needButton, title }) => {

    if (needButton) {

        if (page == "new") {
            return (
                <div className="videoTypeTitle d-flex justify-content-between align-items-center">
                    <h4 class="u-text u-text-2-2 u-text-grey-50">
                        {title}
                    </h4>

                    <a href="#video/all" className="customVideoMore">MORE</a>
                </div>
            )
        } else {

            return (
                <div className="videoTypeTitle d-flex justify-content-between align-items-center">
                    <h4 class="u-text u-text-2-2 u-text-grey-50">
                        {title}
                    </h4>

                    <a href={"#video/" + page} className="customVideoMore">MORE</a>
                </div>
            )

        }

    } else {
        return (
            <div className="videoTypeTitle d-flex justify-content-between align-items-center">
                <h4 class="u-text u-text-2-2 u-text-grey-50">
                    {title}
                </h4>
            </div>

        )
    }

}


export default TypeTitle