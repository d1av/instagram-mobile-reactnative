import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M18.027 5.54a5.078 5.078 0 0 0-1.111-1.618 5.183 5.183 0 0 0-3.64-1.48A5.216 5.216 0 0 0 10 3.595a5.216 5.216 0 0 0-3.275-1.154 5.182 5.182 0 0 0-3.641 1.48 5.048 5.048 0 0 0-1.522 3.607c0 .65.133 1.328.397 2.018.22.576.537 1.174.941 1.777.641.955 1.522 1.951 2.616 2.961a29.236 29.236 0 0 0 3.683 2.877l.463.297c.205.13.469.13.674 0l.463-.297a29.601 29.601 0 0 0 3.683-2.877c1.094-1.01 1.975-2.006 2.616-2.96a8.936 8.936 0 0 0 .941-1.778c.264-.69.396-1.367.396-2.018a4.972 4.972 0 0 0-.408-1.99ZM10 15.913S3.047 11.46 3.047 7.53c0-1.99 1.646-3.603 3.678-3.603 1.427 0 2.666.797 3.275 1.96a3.688 3.688 0 0 1 3.275-1.96c2.032 0 3.678 1.613 3.678 3.603 0 3.93-6.953 8.385-6.953 8.385Z"
            fill="#4D4C4D"
        />
    </Svg>
)

export default SvgComponent
