import { YStack } from 'tamagui'
import { forwardRef } from 'react'

export const BentoIcon = forwardRef(
  ({ bright, scale = 1 }: { bright?: boolean; scale?: number }, ref) => (
    <YStack tag="span" ref={ref as any} p="$4" m="$-4">
      <svg width={25 * scale} height={25 * scale} viewBox="0 0 626 626">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M331.699219,77 C397.585791,77 553.867188,126 591,203.804688 C597.789062,232.210938 591,365.976563 591,380.359781 C591,394.743 588.570152,411.629121 568.416463,427.735005 C548.262774,443.840889 460.015487,502.181785 392.264876,533.765268 C324.514266,565.34875 279.347192,549.557009 243.213533,533.765268 C207.079875,517.973527 62.5452392,434.502894 51.2534708,427.735005 C39.9617024,420.967116 36.6786837,413.052771 35.444995,396.151522 C34.6474882,385.225863 35.1101929,333.807432 35.3889527,284.149169 C37.6783031,285.973204 40.2636523,287 43,287 C52.3888407,287 60,274.911688 60,260 C60,245.088312 52.3888407,233 43,233 C40.3287362,233 37.8013732,233.978533 35.5522626,235.722216 C35.5498644,226.718685 35.5181972,218.410244 35.444995,211.162553 C34.896689,156.875182 265.812646,77 331.699219,77 Z M105.547166,341.605381 C102.301952,340.935123 99.1278339,343.022538 98.457576,346.267753 L98.457576,346.267753 L93.4534253,370.496548 C93.4324234,370.598234 93.4140645,370.700448 93.3983673,370.803087 C92.8974061,374.07871 95.1467137,377.140236 98.4223367,377.641197 C117.363195,380.537939 133.101925,385.192412 145.638528,391.604615 C157.838745,397.844764 173.79093,408.083992 193.495082,422.322299 C194.228803,422.852489 195.058395,423.235332 195.937901,423.449618 C199.694012,424.364775 203.480823,422.061726 204.395984,418.305615 L204.395984,418.305615 L211.065504,390.931656 C211.185397,390.439573 211.258289,389.937216 211.283199,389.431351 C211.500497,385.018419 208.099265,381.264877 203.686333,381.047579 L203.686333,381.047579 L148.075583,378.309236 L108.318088,342.995439 C107.532163,342.297356 106.576628,341.818004 105.547166,341.605381 Z M313,326 C295.879173,326 282,343.460895 282,365 C282,386.539105 295.879173,404 313,404 C330.120827,404 344,386.539105 344,365 C344,343.460895 330.120827,326 313,326 Z"
            id="Path-22"
            fill={bright ? `var(--color10)` : `var(--color)`}
          ></path>
        </g>
      </svg>
    </YStack>
  )
)

// export const BentoIcon = forwardRef(
//   ({ bright, scale = 1 }: { bright?: boolean; scale?: number }, ref) => (
//     <YStack tag="span" ref={ref as any} p="$4" m="$-4">
//       <svg width={25 * scale} height={25 * scale} viewBox="0 0 128 128">
//         <g fill="none" fillRule="evenodd">
//           <g
//             id="Group-Copy-4"
//             transform="translate(14.000000, 9.500000)"
//             fill={bright ? `var(--color10)` : `var(--color)`}
//           >
//             <path
//               d="M46.807671,0.920981572 C62.0021399,-0.775829261 75.0770371,2.63811501 81.9206306,11.5009683 L82,11.5 C78.6862915,11.5 76,14.1862915 76,17.5 C76,20.8137085 78.6862915,23.5 82,23.5 C83.8474866,23.5 85.4999483,22.6649987 86.6005799,21.3518011 C88.3573066,26.9676424 88.4518046,30.4325602 88.8794685,35.2328958 C92.9857554,35.306488 96.877505,35.6466812 98.4887944,36.1820611 C108.011324,39.346093 102.900401,44.5593321 98.7192989,50.165058 C100.57658,50.8208687 101.541841,52.1167892 100.683757,54.6751838 C100.037854,56.6009571 98.2275286,58.6187127 95.252781,60.7284505 C101.258871,73.4530557 109.983003,84.8531678 103.982861,97.2263988 C96.3363615,112.994676 74.6660729,114.5 55.4585219,114.5 C36.250971,114.5 3.73265448,108.996854 0.506463957,90.7508683 C-2.71972656,72.5048828 11.9772665,66.4585382 14.9112839,56.677463 C17.8453014,46.8963878 12.4291382,42.9461754 12.4291382,29.5875856 C12.4291382,16.2289957 28.6110438,2.95305221 46.807671,0.920981572 Z M39.040637,61.5 C36.459137,61.5 35.3469386,65.4107948 35.5168304,70.1590127 C34.2662606,70.8762358 33.3552564,72.1178117 33.0839347,73.58373 C30.7600068,74.0140245 29,76.0514765 29,78.5 L29,78.5 L29,93.5 C29,96.2614237 31.2385763,98.5 34,98.5 L34,98.5 L58,98.5 C60.4485235,98.5 62.4859755,96.7399932 62.9160653,94.41627 C65.2399932,93.9859755 67,91.9485235 67,89.5 L67,89.5 L67,74.5 C67,71.7385763 64.7614237,69.5 62,69.5 L62,69.5 L61.4444262,69.5 L61.4361503,69.7760557 C61.7451034,74.9291923 60.9328453,79.3147689 58.9993761,82.9327857 L58.7879283,83.3174933 C55.6597257,88.8531652 49.4425851,90.218964 42.1834173,86.1235962 C38.0926758,83.8157434 35.736177,76.2894161 35.5168304,70.1590127 C36.2482676,69.7398405 37.0961249,69.5 38,69.5 L42.7979287,69.500359 C42.6840561,65.3286575 42.3382979,61.5 39.040637,61.5 Z M57.4543753,61.5 C55.4138023,61.5 54.7374975,65.33436 54.4106638,69.500496 L42.7979287,69.500359 C42.8882903,72.8107416 42.8326349,76.337137 43.9901096,78.3378424 C46.6062191,82.859811 51.6278435,81.2264525 53.2604576,79.7821474 C54.1139833,79.0270692 54.0526031,74.0646811 54.4106638,69.500496 L61.4444262,69.5 L61.4466062,69.4276296 C61.5752053,64.1425432 60.2444616,61.5 57.4543753,61.5 Z M63.5,27.5 C58.2532949,27.5 54,31.7532949 54,37 C54,42.2467051 58.2532949,46.5 63.5,46.5 C68.7467051,46.5 73,42.2467051 73,37 C73,31.7532949 68.7467051,27.5 63.5,27.5 Z"
//               id="Path-6"
//             ></path>
//           </g>
//         </g>
//       </svg>
//     </YStack>
//   )
// )
