import React from 'react';
import '../styles/KPICard.css';
import AiSVG from '../assets/svg/AI.svg';

function KPICard(props) {
    return (
        <div>
            <div className = "KPICard">
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"25px"}}>
                    <svg width="57" height="66" viewBox="0 0 57 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.1656 9.08554C18.9095 9.08554 18.6592 9.16148 18.4462 9.30377C18.2333 9.44605 18.0673 9.64829 17.9693 9.8849C17.8713 10.1215 17.8457 10.3819 17.8956 10.6331C17.9456 10.8842 18.0689 11.115 18.25 11.2961C18.4311 11.4772 18.6618 11.6005 18.913 11.6505C19.1642 11.7004 19.4246 11.6748 19.6612 11.5768C19.8978 11.4788 20.1 11.3128 20.2423 11.0998C20.3846 10.8869 20.4605 10.6365 20.4605 10.3804C20.46 10.0372 20.3234 9.7081 20.0807 9.46537C19.838 9.22264 19.5089 9.08605 19.1656 9.08554ZM14.8736 13.6381C14.8735 13.3819 14.7975 13.1316 14.6551 12.9187C14.5128 12.7058 14.3105 12.5399 14.0738 12.442C13.8372 12.344 13.5768 12.3185 13.3256 12.3685C13.0744 12.4185 12.8437 12.5419 12.6627 12.7231C12.4816 12.9042 12.3583 13.135 12.3084 13.3862C12.2585 13.6374 12.2842 13.8978 12.3823 14.1344C12.4803 14.371 12.6463 14.5732 12.8593 14.7154C13.0723 14.8577 13.3226 14.9336 13.5787 14.9336C13.9222 14.9333 14.2515 14.7967 14.4943 14.5538C14.7371 14.3108 14.8735 13.9815 14.8736 13.6381ZM9.25525 24.3346C8.99902 24.3343 8.74848 24.4101 8.53532 24.5522C8.32215 24.6944 8.15594 24.8966 8.05773 25.1332C7.95951 25.3699 7.9337 25.6303 7.98356 25.8817C8.03342 26.133 8.15672 26.3639 8.33784 26.5451C8.51896 26.7263 8.74977 26.8497 9.00106 26.8998C9.25235 26.9498 9.51283 26.9241 9.74953 26.826C9.98624 26.728 10.1885 26.5619 10.3308 26.3488C10.4731 26.1357 10.549 25.8852 10.5489 25.629C10.5484 25.286 10.4119 24.9572 10.1695 24.7146C9.92699 24.4719 9.59825 24.3353 9.25525 24.3346ZM12.2837 37.6211C12.2836 37.8772 12.3595 38.1277 12.5017 38.3407C12.644 38.5537 12.8462 38.7198 13.0828 38.8179C13.3194 38.916 13.5798 38.9417 13.8311 38.8918C14.0823 38.8419 14.3131 38.7186 14.4943 38.5375C14.6754 38.3564 14.7988 38.1257 14.8489 37.8744C14.8989 37.6232 14.8732 37.3628 14.7752 37.1261C14.6772 36.8895 14.5113 36.6872 14.2983 36.5449C14.0853 36.4025 13.8349 36.3266 13.5787 36.3266C13.2354 36.3268 12.9061 36.4633 12.6633 36.7061C12.4205 36.9489 12.284 37.2781 12.2837 37.6215V37.6211ZM17.8707 40.8786C17.8707 41.1347 17.9467 41.385 18.089 41.598C18.2313 41.8109 18.4335 41.9769 18.6701 42.0749C18.9067 42.1729 19.1671 42.1986 19.4183 42.1486C19.6694 42.0986 19.9002 41.9753 20.0813 41.7942C20.2624 41.6131 20.3857 41.3824 20.4357 41.1312C20.4856 40.88 20.46 40.6196 20.362 40.383C20.264 40.1464 20.098 39.9442 19.885 39.8019C19.6721 39.6596 19.4217 39.5837 19.1656 39.5837C18.8223 39.5839 18.4931 39.7205 18.2503 39.9632C18.0075 40.206 17.871 40.5352 17.8707 40.8786ZM26.9594 32.0178C28.5213 31.8297 29.9603 31.0758 31.0041 29.8987C32.0479 28.7216 32.6243 27.2028 32.6243 25.6296C32.6243 24.0563 32.0479 22.5376 31.0041 21.3605C29.9603 20.1834 28.5213 19.4295 26.9594 19.2413V32.0178ZM19.9342 13.1055V18.3457H25.4264C25.4463 18.1569 25.5355 17.9821 25.6766 17.8552C25.8178 17.7282 26.0009 17.658 26.1908 17.658C28.3048 17.658 30.3323 18.4978 31.8272 19.9927C33.3221 21.4876 34.1619 23.5151 34.1619 25.6291C34.1619 27.7432 33.3221 29.7707 31.8272 31.2656C30.3323 32.7604 28.3048 33.6002 26.1908 33.6002C26.0011 33.6 25.8182 33.5298 25.6771 33.403C25.536 33.2762 25.4467 33.1018 25.4264 32.9132H19.9342V38.1526C20.5923 38.3382 21.1611 38.7557 21.5354 39.3279C21.9096 39.9001 22.0642 40.5884 21.9706 41.2657C21.8769 41.943 21.5413 42.5636 21.0257 43.0127C20.5102 43.4619 19.8495 43.7093 19.1658 43.7093C18.482 43.7093 17.8213 43.4619 17.3058 43.0127C16.7902 42.5636 16.4546 41.943 16.361 41.2657C16.2673 40.5884 16.4219 39.9001 16.7962 39.3279C17.1705 38.7557 17.7392 38.3382 18.3973 38.1526V32.6378C18.3977 32.3036 18.5305 31.9831 18.7668 31.7467C19.0031 31.5103 19.3235 31.3772 19.6577 31.3766H25.4224V29.6551H14.3476V34.8959C15.0058 35.0815 15.5746 35.499 15.949 36.0713C16.3234 36.6436 16.478 37.332 16.3843 38.0094C16.2906 38.6868 15.955 39.3075 15.4394 39.7567C14.9238 40.2059 14.263 40.4534 13.5791 40.4534C12.8953 40.4534 12.2345 40.2059 11.7189 39.7567C11.2033 39.3075 10.8676 38.6868 10.7739 38.0094C10.6803 37.332 10.8349 36.6436 11.2093 36.0713C11.5836 35.499 12.1524 35.0815 12.8106 34.8959V29.3796C12.8108 29.0454 12.9436 28.7249 13.1798 28.4885C13.416 28.252 13.7364 28.119 14.0706 28.1185H25.4224V26.3981H11.9804C11.7948 27.0565 11.3773 27.6255 10.8049 28C10.2324 28.3744 9.54384 28.5291 8.86626 28.4355C8.18867 28.3418 7.56787 28.0061 7.11852 27.4903C6.66917 26.9746 6.42164 26.3137 6.42164 25.6296C6.42164 24.9456 6.66917 24.2847 7.11852 23.7689C7.56787 23.2532 8.18867 22.9175 8.86626 22.8238C9.54384 22.7301 10.2324 22.8848 10.8049 23.2593C11.3773 23.6338 11.7948 24.2028 11.9804 24.8611H25.4224V23.1406H14.0706C13.7364 23.1401 13.4161 23.007 13.1799 22.7706C12.9437 22.5342 12.8109 22.2137 12.8106 21.8796V16.3639C12.1524 16.1783 11.5836 15.7608 11.2093 15.1885C10.8349 14.6162 10.6803 13.9278 10.7739 13.2504C10.8676 12.573 11.2033 11.9523 11.7189 11.5031C12.2345 11.0539 12.8953 10.8064 13.5791 10.8064C14.263 10.8064 14.9238 11.0539 15.4394 11.5031C15.955 11.9523 16.2906 12.573 16.3843 13.2504C16.478 13.9278 16.3234 14.6162 15.949 15.1885C15.5746 15.7608 15.0058 16.1783 14.3476 16.3639V21.6034H25.4224V19.8824H19.6575C19.3233 19.8819 19.003 19.749 18.7667 19.5127C18.5304 19.2764 18.3975 18.9561 18.397 18.6219V13.1055C17.7388 12.9199 17.1699 12.5024 16.7955 11.93C16.4211 11.3577 16.2664 10.6692 16.3601 9.99172C16.4537 9.31423 16.7894 8.69353 17.3051 8.24426C17.8208 7.79499 18.4816 7.54749 19.1655 7.54749C19.8494 7.54749 20.5103 7.79499 21.0259 8.24426C21.5416 8.69353 21.8773 9.31423 21.9709 9.99172C22.0646 10.6692 21.91 11.3577 21.5356 11.93C21.1611 12.5024 20.5923 12.9199 19.934 13.1055H19.9342ZM44.4207 22.8047V28.4545L41.0961 28.8623C40.9437 28.8809 40.8003 28.9447 40.6845 29.0455C40.5688 29.1463 40.4858 29.2795 40.4464 29.4279C40.1114 30.687 39.6105 31.896 38.957 33.0232C38.8798 33.1557 38.8442 33.3083 38.8546 33.4613C38.8651 33.6143 38.9212 33.7606 39.0156 33.8814L41.0777 36.5232L37.0843 40.5179L34.443 38.4544C34.322 38.36 34.1755 38.3039 34.0224 38.2933C33.8693 38.2828 33.7166 38.3182 33.5837 38.3951C32.4569 39.0496 31.2478 39.5508 29.9884 39.8853C29.8403 39.9249 29.7073 40.0078 29.6067 40.1234C29.506 40.239 29.4422 40.382 29.4234 40.5342L29.0149 43.86H26.9594V36.6259C29.743 36.4311 32.3491 35.1879 34.2521 33.1471C36.1551 31.1062 37.2133 28.4197 37.2133 25.6292C37.2133 22.8388 36.1551 20.1523 34.2521 18.1114C32.3491 16.0706 29.743 14.8274 26.9594 14.6326V7.39961H29.0151L29.4235 10.7248C29.4423 10.877 29.5061 11.02 29.6068 11.1355C29.7075 11.2511 29.8404 11.3339 29.9885 11.3733C31.2477 11.7083 32.4568 12.2094 33.5838 12.8634C33.7166 12.9405 33.8694 12.976 34.0226 12.9655C34.1757 12.9549 34.3222 12.8987 34.4431 12.8041L37.0844 10.742L41.0779 14.736L39.0158 17.3772C38.9214 17.4981 38.8653 17.6444 38.8549 17.7973C38.8444 17.9503 38.88 18.1029 38.9571 18.2354C39.6103 19.3627 40.1111 20.5716 40.4463 21.8306C40.4856 21.979 40.5685 22.1122 40.6843 22.213C40.8001 22.3138 40.9435 22.3776 41.0959 22.3961L44.4205 22.8047H44.4207ZM44.6152 29.9784L41.7886 30.3259C41.4751 31.3691 41.0572 32.3781 40.5413 33.3376L42.2949 35.5829C42.524 35.8771 42.6378 36.2449 42.6149 36.6171C42.592 36.9893 42.4339 37.3403 42.1704 37.6042L38.1653 41.6091C37.9015 41.8727 37.5504 42.0308 37.1782 42.0536C36.806 42.0764 36.4382 41.9624 36.1442 41.733L33.8987 39.9801C32.9393 40.4966 31.9301 40.9146 30.8865 41.2278L30.539 44.0546C30.4936 44.4248 30.3144 44.7655 30.0352 45.0127C29.7559 45.2599 29.3959 45.3965 29.023 45.3966H26.1909C26.0899 45.3968 25.9899 45.377 25.8966 45.3384C25.8033 45.2998 25.7186 45.2432 25.6472 45.1718C25.5758 45.1005 25.5192 45.0157 25.4806 44.9224C25.442 44.8291 25.4223 44.7291 25.4224 44.6281V35.8844C25.4224 35.6806 25.5034 35.4852 25.6475 35.341C25.7916 35.1969 25.9871 35.116 26.1909 35.116C28.7069 35.116 31.1198 34.1165 32.8989 32.3374C34.678 30.5583 35.6775 28.1454 35.6775 25.6294C35.6775 23.1134 34.678 20.7004 32.8989 18.9214C31.1198 17.1423 28.7069 16.1428 26.1909 16.1428C25.9871 16.1428 25.7916 16.0618 25.6475 15.9177C25.5034 15.7736 25.4224 15.5781 25.4224 15.3743V6.63035C25.4224 6.42654 25.5034 6.23107 25.6475 6.08695C25.7916 5.94283 25.9871 5.86187 26.1909 5.86187H29.023C29.396 5.86224 29.7559 5.99893 30.0351 6.24619C30.3143 6.49345 30.4935 6.83424 30.539 7.20441L30.8865 10.0305C31.9302 10.344 32.9394 10.7625 33.8987 11.2796L36.1442 9.52486C36.4383 9.29565 36.806 9.18176 37.1782 9.20459C37.5504 9.22743 37.9014 9.38541 38.1653 9.64884L42.1704 13.6538C42.4339 13.9177 42.5919 14.2687 42.6149 14.6409C42.6378 15.0131 42.524 15.3808 42.2949 15.675L40.5413 17.9213C41.0572 18.8808 41.475 19.8897 41.7886 20.9329L44.6152 21.2804C44.9855 21.3262 45.3263 21.5057 45.5735 21.7851C45.8208 22.0645 45.9575 22.4245 45.9579 22.7976V28.4614C45.9575 28.8345 45.8209 29.1946 45.5736 29.474C45.3263 29.7535 44.9855 29.9329 44.6152 29.9786V29.9784ZM54.2985 45.0976L51.6356 45.3563L51.4162 48.648C51.4046 48.823 51.3335 48.9888 51.2147 49.1178C51.0958 49.2469 50.9364 49.3313 50.763 49.3573L49.6571 49.5205L50.624 51.0085C50.6871 51.1055 50.7274 51.2155 50.7421 51.3303C50.7567 51.445 50.7453 51.5616 50.7085 51.6714C50.6718 51.7811 50.6108 51.8811 50.53 51.964C50.4493 52.0468 50.3508 52.1103 50.2421 52.1498L47.9689 52.9753L48.5569 57.0885C48.5722 57.199 48.5637 57.3115 48.5321 57.4184C48.1556 58.6729 47.4003 59.5527 46.2896 60.0313C44.0067 61.015 40.2839 60.227 34.9199 57.6226C33.727 60.6766 32.9355 63.2381 32.5615 65.246C32.5286 65.4223 32.435 65.5817 32.297 65.6963C32.159 65.8109 31.9852 65.8736 31.8058 65.8736H3.10812C2.94986 65.8736 2.79546 65.8247 2.66602 65.7336C2.53657 65.6426 2.4384 65.5138 2.38491 65.3648C2.33142 65.2159 2.32522 65.054 2.36716 64.9014C2.4091 64.7488 2.49714 64.6129 2.61924 64.5122C4.89613 62.6359 6.88165 57.5149 8.52224 49.2903C3.6871 42.0123 1.05921 33.4917 0.955082 24.7546C0.966404 20.6182 2.01964 16.5512 4.01756 12.9293C6.01547 9.30734 8.89367 6.2471 12.3864 4.03108C20.7682 -1.28659 33.1035 -0.880955 42.3856 5.01641C50.1601 9.95751 54.0035 17.6183 52.9316 26.0345C52.9242 26.0936 52.9096 26.1516 52.8882 26.2073C50.9219 31.4439 51.2923 33.3309 51.719 33.9992C54.7209 37.1104 56.4937 40.0025 56.7144 42.1458C56.7503 42.4984 56.7163 42.8546 56.6143 43.194C56.5122 43.5334 56.3441 43.8493 56.1196 44.1236C55.8952 44.3978 55.6187 44.625 55.3062 44.7922C54.9937 44.9593 54.6512 45.0631 54.2985 45.0976Z" fill="url(#paint0_linear_3522_17344)"/>
                        <defs>
                        <linearGradient id="paint0_linear_3522_17344" x1="36.7227" y1="20.6149" x2="71.6925" y2="55.2654" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1889D8"/>
                        <stop offset="1" stopColor="#01FFF0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <span className='KPIText'>Predictive Analytics</span>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"25px"}}>
                    <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.907715 41.1008C0.907715 42.0868 1.29943 43.0325 1.99669 43.7298C2.69395 44.427 3.63964 44.8188 4.62572 44.8188C5.09144 44.817 5.5526 44.7268 5.98464 44.5529C8.18198 46.2353 11.2828 47.1128 15.0937 47.1128C15.6682 47.1128 16.2649 47.0858 16.87 47.0468C19.5693 52.5624 23.4639 55.9728 27.8632 55.9728C32.2625 55.9728 36.1572 52.5624 38.8573 47.0496C39.4634 47.0886 40.0592 47.1156 40.6336 47.1156C44.4446 47.1156 47.5454 46.2381 49.7427 44.5557C50.1749 44.7286 50.635 44.8178 51.1007 44.8188C51.8999 44.8165 52.6771 44.5567 53.3171 44.078C53.9571 43.5993 54.4258 42.9272 54.6537 42.1612C54.8816 41.3952 54.8567 40.5761 54.5825 39.8254C54.3084 39.0747 53.7996 38.4323 53.1317 37.9934C53.2618 35.0005 52.1046 31.6041 49.7492 28.0878C52.1046 24.5724 53.2618 21.176 53.1317 18.1821C53.9072 17.6816 54.4683 16.9101 54.7054 16.0181C54.9425 15.1261 54.8385 14.1778 54.4139 13.3583C53.9892 12.5388 53.2743 11.9071 52.4089 11.5865C51.5434 11.2659 50.5895 11.2794 49.7334 11.6245C47.208 9.69202 43.4788 8.83595 38.8583 9.13711C36.1609 3.61681 32.2644 0.202759 27.8632 0.202759C23.462 0.202759 19.5684 3.61402 16.8691 9.13061C15.531 9.03463 14.1872 9.05111 12.8518 9.17987C12.7273 9.18971 12.6062 9.22506 12.496 9.28372C12.3858 9.34237 12.2889 9.42307 12.2112 9.52081C12.1335 9.61854 12.0768 9.73121 12.0445 9.85182C12.0122 9.97242 12.0051 10.0984 12.0236 10.2218C12.098 10.7154 12.5413 11.0677 13.0396 11.0296C14.0417 10.9307 15.0498 10.904 16.0558 10.9496C14.9025 13.8291 14.0854 16.8321 13.6205 19.8989C11.2166 21.8347 9.0409 24.0378 7.13537 26.4658C5.56546 24.1879 4.63174 21.5324 4.43052 18.7732C4.49652 18.7732 4.55879 18.7928 4.62572 18.7928C5.5229 18.7964 6.39139 18.4768 7.07218 17.8924C7.75296 17.308 8.2005 16.498 8.33287 15.6106C8.46523 14.7232 8.27356 13.8179 7.79294 13.0603C7.31233 12.3027 6.57492 11.7435 5.71572 11.4852C4.85653 11.2268 3.93303 11.2866 3.11428 11.6535C2.29554 12.0204 1.63633 12.6699 1.25735 13.4831C0.878362 14.2963 0.804951 15.2189 1.05056 16.0818C1.29616 16.9447 1.84435 17.6903 2.59476 18.1821C2.4637 21.1741 3.62186 24.5705 5.97721 28.0878C3.62186 31.6041 2.4637 35.0005 2.59476 37.9934C2.0773 38.3302 1.65202 38.7907 1.35744 39.3333C1.06286 39.8759 0.908286 40.4834 0.907715 41.1008ZM4.62572 13.2158C5.11875 13.2158 5.5916 13.4116 5.94023 13.7602C6.28886 14.1089 6.48472 14.5817 6.48472 15.0748C6.48472 15.5678 6.28886 16.0406 5.94023 16.3893C5.5916 16.7379 5.11875 16.9338 4.62572 16.9338C4.13268 16.9338 3.65983 16.7379 3.3112 16.3893C2.96257 16.0406 2.76672 15.5678 2.76672 15.0748C2.76672 14.5817 2.96257 14.1089 3.3112 13.7602C3.65983 13.4116 4.13268 13.2158 4.62572 13.2158ZM2.76672 41.1008C2.76672 40.6077 2.96257 40.1349 3.3112 39.7862C3.65983 39.4376 4.13268 39.2418 4.62572 39.2418C5.11875 39.2418 5.5916 39.4376 5.94023 39.7862C6.28886 40.1349 6.48472 40.6077 6.48472 41.1008C6.48472 41.5938 6.28886 42.0666 5.94023 42.4153C5.5916 42.7639 5.11875 42.9598 4.62572 42.9598C4.13268 42.9598 3.65983 42.7639 3.3112 42.4153C2.96257 42.0666 2.76672 41.5938 2.76672 41.1008ZM18.0189 11.0965C20.4932 11.393 22.9313 11.9405 25.295 12.7296C21.955 14.2128 18.7817 16.0458 15.8281 18.1979C16.3154 15.7625 17.0495 13.3831 18.0189 11.0965ZM15.3605 20.8869C17.2561 19.3847 19.2604 18.0249 21.3567 16.8185C23.4481 15.609 25.6245 14.5528 27.8688 13.6582C30.1108 14.5533 32.2858 15.6102 34.3753 16.8185C36.4714 18.0248 38.4753 19.3847 40.3706 20.8869C40.7108 23.272 40.8799 25.6785 40.8762 28.0878C40.878 30.4971 40.7074 32.9035 40.3659 35.2886C38.4703 36.7908 36.4661 38.1507 34.3697 39.357C32.28 40.5656 30.1055 41.6212 27.8632 42.5155C25.6208 41.6208 23.4463 40.5646 21.3567 39.3552C19.2606 38.1489 17.2567 36.789 15.3614 35.2867C14.681 30.5103 14.681 25.6615 15.3614 20.8851L15.3605 20.8869ZM39.8993 18.1979C38.42 17.1204 36.8845 16.1222 35.2992 15.2077C33.7222 14.3003 32.1003 13.4732 30.4398 12.7296C32.8007 11.9396 35.236 11.393 37.7085 11.0965C38.6773 13.3832 39.4107 15.7626 39.8975 18.1979H39.8993ZM37.7076 45.079C35.2331 44.7827 32.7952 44.2355 30.4314 43.4459C33.7714 41.9627 36.9448 40.1297 39.8984 37.9776C39.411 40.413 38.677 42.7924 37.7076 45.079ZM42.461 22.6437C44.3133 24.2852 45.9955 26.1091 47.4822 28.0878C45.9961 30.0664 44.3145 31.8902 42.4629 33.5318C42.6451 31.723 42.7362 29.9059 42.7352 28.0878C42.7352 26.2697 42.6441 24.4534 42.461 22.6437ZM20.4272 40.9678C22.0042 41.8752 23.6261 42.7023 25.2866 43.4459C22.9257 44.236 20.4904 44.7825 18.018 45.079C17.0489 42.7924 16.3151 40.413 15.8281 37.9776C17.3071 39.0551 18.8423 40.0533 20.4272 40.9678ZM27.8632 54.1138C24.372 54.1138 21.1996 51.3448 18.8601 46.8534C21.9407 46.4167 24.9613 45.6296 27.8632 44.5074C30.7663 45.6301 33.7882 46.4172 36.8701 46.8534C34.5259 51.3448 31.3544 54.1138 27.8632 54.1138ZM51.1007 42.9598C50.6077 42.9598 50.1348 42.7639 49.7862 42.4153C49.4376 42.0666 49.2417 41.5938 49.2417 41.1008C49.2417 40.6077 49.4376 40.1349 49.7862 39.7862C50.1348 39.4376 50.6077 39.2418 51.1007 39.2418C51.5938 39.2418 52.0666 39.4376 52.4152 39.7862C52.7639 40.1349 52.9597 40.6077 52.9597 41.1008C52.9597 41.5938 52.7639 42.0666 52.4152 42.4153C52.0666 42.7639 51.5938 42.9598 51.1007 42.9598ZM51.2959 37.4023C51.2299 37.4023 51.1676 37.3828 51.1007 37.3828C50.1146 37.3828 49.169 37.7745 48.4717 38.4717C47.7744 39.169 47.3827 40.1147 47.3827 41.1008C47.3864 41.9317 47.6709 42.7367 48.1905 43.3864C46.166 44.7221 43.2111 45.3569 39.6716 45.224C40.824 42.345 41.6408 39.3427 42.106 36.2767C44.5101 34.3408 46.6858 32.1373 48.5911 29.7088C50.1605 31.9873 51.0942 34.643 51.2959 37.4023ZM52.9597 15.0748C52.9597 15.5678 52.7639 16.0406 52.4152 16.3893C52.0666 16.7379 51.5938 16.9338 51.1007 16.9338C50.6077 16.9338 50.1348 16.7379 49.7862 16.3893C49.4376 16.0406 49.2417 15.5678 49.2417 15.0748C49.2417 14.5817 49.4376 14.1089 49.7862 13.7602C50.1348 13.4116 50.6077 13.2158 51.1007 13.2158C51.5938 13.2158 52.0666 13.4116 52.4152 13.7602C52.7639 14.1089 52.9597 14.5817 52.9597 15.0748ZM48.1905 12.7891C47.6709 13.438 47.3862 14.2435 47.3827 15.0748C47.3827 16.0608 47.7744 17.0065 48.4717 17.7038C49.169 18.401 50.1146 18.7928 51.1007 18.7928C51.1676 18.7928 51.2299 18.777 51.2959 18.7732C51.0944 21.5326 50.1607 24.1883 48.5911 26.4667C46.6855 24.0382 44.5095 21.8347 42.105 19.8989C41.6393 16.8326 40.8215 13.8304 39.6679 10.9515C43.2102 10.8176 46.1669 11.4497 48.1905 12.7891ZM27.8632 2.06176C31.3544 2.06176 34.5268 4.83074 36.8664 9.32208C33.7874 9.75917 30.7683 10.5463 27.8679 11.6681C24.9646 10.5457 21.9428 9.75829 18.861 9.32115C21.2006 4.83074 24.372 2.06176 27.8632 2.06176ZM13.2701 22.6437C12.9045 26.2639 12.9045 29.9117 13.2701 33.5318C11.4157 31.8911 9.73186 30.0671 8.24426 28.0878C9.73236 26.1088 11.4161 24.2849 13.2701 22.6437ZM7.13537 29.7079C9.04178 32.1357 11.2181 34.3388 13.6223 36.2748C14.0871 39.3421 14.9051 42.3444 16.0586 45.2249C12.5209 45.3588 9.56415 44.7221 7.5397 43.3864C8.0579 42.737 8.34126 41.9315 8.34372 41.1008C8.34372 40.1147 7.952 39.169 7.25474 38.4717C6.55748 37.7745 5.61179 37.3828 4.62572 37.3828C4.55879 37.3828 4.49652 37.3995 4.43052 37.4023C4.63205 34.6432 5.56575 31.9878 7.13537 29.7097V29.7079Z" fill="url(#paint0_linear_3522_17394)"/>
                        <defs>
                        <linearGradient id="paint0_linear_3522_17394" x1="20.2494" y1="17.4793" x2="-9.28516" y2="50.7455" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1889D8"/>
                        <stop offset="1" stopColor="#01FFF0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <span className='KPIText'>Generative AI</span>
                </div>

                <svg width="117" height="8" viewBox="0 0 117 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.37085 4.17705L113.867 3.99844" stroke="#00D3FF" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.75728 4.17706C4.75728 5.8737 3.68893 7.23994 2.37778 7.23994C1.0597 7.23994 -0.00170898 5.86477 -0.00170898 4.17706C-0.00170898 2.48042 1.06664 1.11417 2.37778 1.11417C3.69587 1.11417 4.75728 2.48935 4.75728 4.17706Z" fill="#3CC4E0"/>
                    <path d="M116.247 3.99846C116.247 5.6951 115.178 7.06135 113.867 7.06135C112.556 7.06135 111.488 5.68617 111.488 3.99846C111.488 2.30182 112.556 0.935577 113.867 0.935577C115.185 0.935577 116.247 2.31074 116.247 3.99846Z" fill="#3CC4E0"/>
                </svg>


                <img width="150px" src={AiSVG}></img>

                <svg width="117" height="8" viewBox="0 0 117 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.37085 4.17705L113.867 3.99844" stroke="#00D3FF" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.75728 4.17706C4.75728 5.8737 3.68893 7.23994 2.37778 7.23994C1.0597 7.23994 -0.00170898 5.86477 -0.00170898 4.17706C-0.00170898 2.48042 1.06664 1.11417 2.37778 1.11417C3.69587 1.11417 4.75728 2.48935 4.75728 4.17706Z" fill="#3CC4E0"/>
                    <path d="M116.247 3.99846C116.247 5.6951 115.178 7.06135 113.867 7.06135C112.556 7.06135 111.488 5.68617 111.488 3.99846C111.488 2.30182 112.556 0.935577 113.867 0.935577C115.185 0.935577 116.247 2.31074 116.247 3.99846Z" fill="#3CC4E0"/>
                </svg>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"25px"}}>
                    <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.4461 54.7828C31.4461 54.8602 31.435 54.9264 31.435 54.9926V55.489L31.4572 54.4956C31.4572 54.5179 31.4461 54.5946 31.4461 54.6943V54.7828ZM23.6997 0.924896C20.3674 0.924896 17.5138 3.24148 16.7925 6.41638C18.4023 6.60064 19.9268 7.32125 21.0631 8.45692C21.186 8.57987 21.2551 8.74663 21.2551 8.9205C21.2551 9.09438 21.186 9.26113 21.0631 9.38408C20.9401 9.50703 20.7734 9.5761 20.5995 9.5761C20.4256 9.5761 20.2589 9.50703 20.1359 9.38408C19.0619 8.3107 17.5597 7.6891 16.0155 7.67795C14.4484 7.67533 12.9593 8.27398 11.8492 9.38408C11.184 10.0509 10.6889 10.868 10.4057 11.7663C10.1226 12.6647 10.0597 13.618 10.2224 14.5458C10.4275 15.7311 10.996 16.8234 11.8492 17.6715C14.1337 19.9559 17.8515 19.9553 20.1366 17.6715C20.1975 17.6106 20.2697 17.5623 20.3493 17.5294C20.4288 17.4964 20.5141 17.4795 20.6002 17.4795C20.6863 17.4795 20.7715 17.4964 20.8511 17.5294C20.9306 17.5623 21.0029 17.6106 21.0637 17.6715C21.1246 17.7324 21.1729 17.8046 21.2059 17.8842C21.2388 17.9637 21.2558 18.049 21.2558 18.1351C21.2558 18.2211 21.2388 18.3064 21.2059 18.3859C21.1729 18.4655 21.1246 18.5378 21.0637 18.5986C19.6658 19.9966 17.8292 20.6956 15.9932 20.6956C14.1573 20.6956 12.32 19.9966 10.9227 18.5986C10.0313 17.711 9.39142 16.6028 9.06837 15.387C6.32558 15.8867 4.25094 18.3154 4.25094 21.148C4.25094 22.2024 4.5283 23.2233 5.05221 24.1C6.02461 25.7779 7.7773 26.846 9.69588 26.9857C9.91216 25.6683 10.5362 24.452 11.48 23.5079C11.5409 23.447 11.6132 23.3987 11.6927 23.3657C11.7723 23.3328 11.8575 23.3158 11.9436 23.3158C12.0297 23.3158 12.115 23.3328 12.1945 23.3657C12.274 23.3987 12.3463 23.447 12.4072 23.5079C12.4681 23.5687 12.5164 23.641 12.5493 23.7206C12.5823 23.8001 12.5992 23.8853 12.5992 23.9714C12.5992 24.0575 12.5823 24.1428 12.5493 24.2223C12.5164 24.3019 12.4681 24.3741 12.4072 24.435C10.4145 26.4277 10.4145 29.6708 12.4072 31.6641C14.3999 33.6574 17.6423 33.6561 19.6363 31.6641C19.6972 31.6032 19.7694 31.5549 19.849 31.522C19.9285 31.489 20.0138 31.4721 20.0999 31.4721C20.186 31.4721 20.2712 31.489 20.3508 31.522C20.4303 31.5549 20.5026 31.6032 20.5634 31.6641C20.6243 31.725 20.6726 31.7973 20.7056 31.8768C20.7385 31.9563 20.7555 32.0416 20.7555 32.1277C20.7555 32.2138 20.7385 32.299 20.7056 32.3786C20.6726 32.4581 20.6243 32.5304 20.5634 32.5913C19.3117 33.8437 17.6666 34.4692 16.0214 34.4692C14.3763 34.4692 12.7311 33.8437 11.4794 32.5913C10.335 31.4461 9.66781 29.9092 9.6126 28.2912C8.54655 28.2158 7.51087 27.9028 6.58153 27.3751C5.65218 26.8474 4.85272 26.1184 4.24176 25.2415C2.14746 26.1077 0.761963 28.1207 0.761963 30.4176C0.761963 32.3493 1.75076 34.1112 3.35985 35.1419C4.09817 34.3605 4.96681 33.7136 5.92691 33.2299C6.08247 33.1521 6.26257 33.1393 6.42759 33.1942C6.59261 33.2492 6.72904 33.3675 6.80686 33.523C6.88468 33.6786 6.89752 33.8587 6.84256 34.0237C6.78759 34.1887 6.66932 34.3251 6.51376 34.403C5.53946 34.8899 4.67486 35.5707 3.97293 36.4035C2.95029 37.6046 2.30342 39.0798 2.1128 40.6457C1.92218 42.2115 2.19624 43.7989 2.90086 45.2102C4.28045 47.9602 7.04488 49.6696 10.1155 49.6696C11.36 49.6696 12.6052 49.3733 13.7147 48.8126C13.8699 48.7341 14.0499 48.7205 14.2152 48.7747C14.3804 48.8289 14.5174 48.9466 14.5959 49.1018C14.6744 49.257 14.6881 49.437 14.6339 49.6023C14.5796 49.7676 14.462 49.9045 14.3068 49.9831C13.213 50.5281 12.0229 50.8531 10.804 50.9397C11.1004 54.0923 13.5776 56.6168 16.6994 56.9807C15.927 54.4936 16.4332 51.7902 18.1151 49.7234C18.1683 49.6534 18.235 49.5948 18.3113 49.5511C18.3876 49.5075 18.4719 49.4796 18.5592 49.4691C18.6465 49.4587 18.735 49.4659 18.8194 49.4903C18.9038 49.5148 18.9825 49.556 19.0507 49.6114C19.1189 49.6669 19.1753 49.7355 19.2165 49.8132C19.2576 49.8908 19.2828 49.976 19.2903 50.0636C19.2979 50.1512 19.2878 50.2394 19.2606 50.323C19.2334 50.4066 19.1897 50.4839 19.1321 50.5502C18.357 51.4942 17.864 52.6377 17.7097 53.8494C17.5554 55.061 17.7462 56.2916 18.26 57.3997C18.6799 58.325 19.3088 59.1402 20.0972 59.7812C20.7631 60.3259 21.5304 60.7331 22.3548 60.9792C23.1791 61.2252 24.0441 61.3052 24.8996 61.2145C25.7594 61.1278 26.5935 60.8711 27.3534 60.4595C28.1133 60.0479 28.7838 59.4895 29.3262 58.8166C30.2119 57.7266 30.7218 56.3795 30.7799 54.9762V8.01629C30.7799 4.10635 27.6037 0.924896 23.6997 0.924896ZM20.9687 44.9466C20.5352 45.3809 20.0201 45.7252 19.453 45.9597C18.886 46.1942 18.2782 46.3143 17.6646 46.3131C17.0511 46.3142 16.4434 46.1941 15.8765 45.9596C15.3096 45.7251 14.7946 45.3808 14.3612 44.9466C12.5403 43.1251 12.5403 40.16 14.3612 38.3385C14.4221 38.2776 14.4943 38.2293 14.5739 38.1964C14.6534 38.1634 14.7387 38.1465 14.8248 38.1465C14.9109 38.1465 14.9961 38.1634 15.0756 38.1964C15.1552 38.2293 15.2275 38.2776 15.2883 38.3385C15.3492 38.3994 15.3975 38.4716 15.4305 38.5512C15.4634 38.6307 15.4804 38.716 15.4804 38.8021C15.4804 38.8882 15.4634 38.9734 15.4305 39.0529C15.3975 39.1325 15.3492 39.2048 15.2883 39.2656C14.6591 39.8967 14.3058 40.7514 14.3058 41.6426C14.3058 42.5337 14.6591 43.3884 15.2883 44.0195C15.9193 44.6485 16.774 45.0017 17.6649 45.0017C18.5559 45.0017 19.4105 44.6485 20.0415 44.0195C20.1024 43.9586 20.1747 43.9103 20.2542 43.8773C20.3337 43.8444 20.419 43.8274 20.5051 43.8274C20.5912 43.8274 20.6764 43.8444 20.756 43.8773C20.8355 43.9103 20.9078 43.9586 20.9687 44.0195C21.0295 44.0803 21.0778 44.1526 21.1108 44.2322C21.1437 44.3117 21.1607 44.3969 21.1607 44.483C21.1607 44.5691 21.1437 44.6544 21.1108 44.7339C21.0778 44.8135 21.0295 44.8857 20.9687 44.9466ZM42.7595 43.5703C42.8841 43.7277 43.0743 43.8129 43.2644 43.8129H50.9099C51.205 45.0522 52.3197 45.9767 53.6442 45.9767C55.2047 45.9767 56.4702 44.7112 56.4702 43.1572C56.4702 41.6032 55.2047 40.3443 53.6442 40.3443C53.0124 40.3445 52.399 40.5575 51.903 40.9488C51.407 41.3402 51.0572 41.8871 50.9099 42.5015H43.5792L40.4318 38.6853C40.3072 38.5345 40.1236 38.4427 39.9269 38.4427H32.0913V39.7541H39.6122L42.7595 43.5703ZM40.4318 23.4928L43.5792 19.6766H50.9099C51.0591 20.29 51.4094 20.8358 51.905 21.2268C52.4006 21.6178 53.0129 21.8315 53.6442 21.8339C55.2047 21.8339 56.4702 20.5684 56.4702 19.0209C56.4702 18.2714 56.1725 17.5526 55.6425 17.0226C55.1125 16.4926 54.3937 16.1948 53.6442 16.1948C52.3197 16.1948 51.205 17.1194 50.9099 18.3652H43.2644C43.0743 18.3652 42.8841 18.4504 42.7595 18.6013L39.6122 22.4174H32.0913V23.7288H39.9269C40.1236 23.7288 40.3072 23.6436 40.4318 23.4928ZM46.8577 33.9053C48.4182 33.9053 49.6837 32.6463 49.6837 31.0923C49.6837 29.5383 48.4182 28.2663 46.8577 28.2663C45.5332 28.2663 44.4185 29.1974 44.1234 30.4366H32.0913V31.748H44.1234C44.2707 32.3624 44.6205 32.9094 45.1165 33.3007C45.6125 33.6921 46.2259 33.905 46.8577 33.9053ZM40.4318 13.8868L43.5792 10.0706H56.8374C56.9847 10.685 57.3345 11.2319 57.8305 11.6233C58.3266 12.0146 58.9399 12.2276 59.5717 12.2279C61.1323 12.2279 62.3978 10.9689 62.3978 9.4149C62.3978 7.86089 61.1323 6.59539 59.5717 6.59539C58.2472 6.59539 57.1325 7.51993 56.8374 8.7592H43.2644C43.0743 8.7592 42.8841 8.84444 42.7595 8.99525L39.6122 12.818H32.0913V14.1294H39.9269C40.1236 14.1294 40.3072 14.0376 40.4318 13.8868ZM59.5717 49.9437C58.2472 49.9437 57.1325 50.8683 56.8374 52.1075H43.5792L40.4318 48.2848C40.3704 48.2105 40.2932 48.1508 40.2059 48.11C40.1186 48.0691 40.0233 48.0482 39.9269 48.0487H32.0913V49.3601H39.6122L42.7595 53.1763C42.8841 53.3271 43.0743 53.4189 43.2644 53.4189H56.8374C57.1325 54.6582 58.2537 55.5827 59.5717 55.5827C60.3212 55.5827 61.04 55.285 61.57 54.755C62.1 54.225 62.3978 53.5062 62.3978 52.7567C62.3978 51.2092 61.1323 49.9437 59.5717 49.9437Z" fill="url(#paint0_linear_3522_17439)"/>
                        <defs>
                        <linearGradient id="paint0_linear_3522_17439" x1="22.8705" y1="19.6128" x2="-8.82129" y2="57.3337" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1889D8"/>
                        <stop offset="1" stopColor="#01FFF0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <span className='KPIText'>Actionable Insights</span>
                </div>

                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"25px"}}>
                    <svg width="55" height="61" viewBox="0 0 55 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M46.0285 5.46818C46.6022 6.04302 46.1855 7.01706 45.3857 7.01706C45.1548 7.01706 44.9224 6.92838 44.7451 6.75022L41.2351 3.24123L41.2354 16.0603C41.2358 33.9867 26.5949 48.6295 8.66878 48.6301L4.54657 48.6302C4.30594 48.6301 4.0752 48.5344 3.90505 48.3643C3.7349 48.1941 3.63925 47.9634 3.63911 47.7227C3.63906 47.6036 3.66249 47.4855 3.70808 47.3754C3.75366 47.2653 3.8205 47.1652 3.90478 47.081C3.98906 46.9967 4.08911 46.9298 4.19924 46.8843C4.30936 46.8387 4.42738 46.8152 4.54657 46.8153L8.66878 46.8152C25.6259 46.8148 39.421 33.0184 39.4205 16.0604L39.4202 3.24136L35.912 6.75048C35.8278 6.83482 35.7277 6.90173 35.6176 6.94738C35.5075 6.99303 35.3894 7.01653 35.2702 7.01653C35.151 7.01653 35.033 6.99303 34.9228 6.94738C34.8127 6.90173 34.7126 6.83482 34.6284 6.75048C34.2737 6.39735 34.2737 5.82317 34.6284 5.46845L39.6863 0.412698C40.0389 0.0546641 40.6179 0.0554583 40.9699 0.412698L46.0285 5.46818ZM52.8193 58.2157L48.2797 58.2158L48.2785 11.0138L52.8181 11.0137L52.8193 58.2157ZM53.7255 9.19954L47.3711 9.19967C47.1306 9.19967 46.9 9.2952 46.73 9.46523C46.5599 9.63526 46.4644 9.86587 46.4644 10.1063L46.4656 59.1225C46.4656 59.6232 46.8715 60.03 47.3723 60.03L53.7267 60.0298C53.9674 60.0297 54.1981 59.934 54.3682 59.7639C54.5384 59.5937 54.634 59.363 54.6342 59.1224L54.633 10.1061C54.633 9.60536 54.2263 9.19954 53.7255 9.19954ZM38.8589 58.2161L38.8585 43.0019L34.3189 43.002L34.3193 58.2162L38.8589 58.2161ZM39.7659 41.1869L33.4123 41.1871C33.1716 41.1871 32.9408 41.2827 32.7706 41.4529C32.6005 41.6231 32.5048 41.8539 32.5048 42.0945L32.5052 59.1229C32.5052 59.3636 32.6009 59.5944 32.771 59.7645C32.9412 59.9347 33.172 60.0303 33.4127 60.0304L39.7663 60.0302C40.007 60.0301 40.2377 59.9344 40.4079 59.7643C40.578 59.5941 40.6737 59.3634 40.6738 59.1228L40.6734 42.0944C40.6733 41.8538 40.5776 41.623 40.4075 41.4529C40.2373 41.2827 40.0066 41.1871 39.7659 41.1869ZM24.8985 58.2165L20.3597 58.2166L20.3596 51.9203L24.8984 51.9201L24.8985 58.2165ZM25.8058 50.1051L19.4521 50.1052C19.2115 50.1054 18.9808 50.201 18.8106 50.3712C18.6405 50.5413 18.5448 50.7721 18.5447 51.0127L18.5448 59.1232C18.545 59.3638 18.6406 59.5945 18.8108 59.7647C18.9809 59.9348 19.2116 60.0305 19.4523 60.0306L25.8059 60.0305C26.0466 60.0305 26.2774 59.9348 26.4476 59.7647C26.6177 59.5945 26.7134 59.3637 26.7134 59.123L26.7131 51.0126C26.7132 50.8934 26.6897 50.7754 26.6441 50.6653C26.5985 50.5552 26.5317 50.4552 26.4474 50.3709C26.3632 50.2866 26.2632 50.2198 26.1531 50.1742C26.043 50.1286 25.925 50.1051 25.8058 50.1051ZM10.9389 58.2168L6.39934 58.2169L6.39921 53.6773L10.9388 53.6772L10.9389 58.2168ZM11.8462 51.8623L5.49175 51.8624C5.25112 51.8626 5.02038 51.9582 4.85023 52.1284C4.68008 52.2985 4.58443 52.5293 4.58429 52.7699L4.58442 59.1236C4.58456 59.3642 4.68021 59.5949 4.85037 59.7651C5.02052 59.9352 5.25125 60.0309 5.49188 60.031L11.8463 60.0309C12.3471 60.0309 12.753 59.6241 12.753 59.1234L12.7529 52.7698C12.7529 52.5292 12.6574 52.2985 12.4874 52.1283C12.3174 51.9582 12.0868 51.8625 11.8462 51.8623ZM2.58989 26.9133C2.58989 28.6181 3.97676 30.0033 5.67997 30.0033C6.05507 30.0033 6.42872 29.8862 6.78318 30.2908C7.19932 30.7659 6.89476 31.1639 6.89476 31.8336C6.89476 34.2846 9.61939 35.7426 11.6531 34.4336C12.2343 34.0594 13.0161 34.4517 13.0506 35.1537C13.2188 38.5824 16.725 40.7465 19.8386 39.4798L19.8382 24.4391L14.5785 24.4392C14.2391 26.209 12.9318 27.7036 11.1667 28.2312C11.082 28.2562 10.9942 28.2691 10.9059 28.2694C9.87538 28.2694 9.64679 26.7924 10.6474 26.4928C11.944 26.1043 12.8499 24.8872 12.8499 23.5317C12.8499 22.177 11.9439 20.9585 10.6473 20.5716C10.1672 20.4279 9.89351 19.9219 10.0373 19.4418C10.181 18.9625 10.6863 18.6888 11.1664 18.8332C12.9316 19.3599 14.239 20.8545 14.5784 22.6243L19.8381 22.6241L19.8377 7.58356C16.7261 6.31793 13.2181 8.48083 13.0499 11.9108C13.0159 12.6054 12.2371 13.005 11.6524 12.6287C11.1548 12.3092 10.5757 12.1396 9.98431 12.1402C7.98117 12.1402 6.51092 14.0238 6.98146 15.9611C7.12864 16.5668 6.6274 17.145 6.00517 17.0773C4.19608 16.8804 2.58949 18.3116 2.58949 20.1491C2.58949 21.2164 3.12926 22.1941 4.03288 22.7652C4.59872 23.1221 4.59488 23.9455 4.03288 24.2995C3.12952 24.8698 2.58976 25.8476 2.58989 26.9133ZM21.6533 28.649C24.089 28.2186 25.9444 26.0879 25.9443 23.5313C25.9443 20.9749 24.0887 18.845 21.653 18.4139L21.6533 28.649ZM22.6245 11.1153H21.6529L21.653 16.5791C25.0925 17.0262 27.7592 19.9718 27.7592 23.5312C27.7593 27.0906 25.0928 30.0364 21.6533 30.4829L21.6534 35.9475H22.6251L23.5623 33.0646C23.6046 32.9349 23.6754 32.8164 23.7696 32.7178C23.8638 32.6193 23.979 32.5431 24.1066 32.495C25.0934 32.1245 26.0122 31.5934 26.8258 30.9231C26.9308 30.836 27.0543 30.7738 27.1869 30.7414C27.3195 30.709 27.4577 30.707 27.5911 30.7358L30.5604 31.3672L32.4386 28.1111L30.4089 25.8566C30.3177 25.7554 30.2504 25.6349 30.212 25.5042C30.1736 25.3734 30.1652 25.2357 30.1872 25.1013C30.3607 24.0613 30.3607 22.9999 30.1871 21.96C30.1649 21.8255 30.1733 21.6878 30.2117 21.557C30.2501 21.4263 30.3175 21.3059 30.4088 21.2047L32.4384 18.9494L30.5599 15.695L27.5899 16.3266C27.4563 16.3549 27.3181 16.3527 27.1855 16.3203C27.0529 16.2879 26.9294 16.226 26.8239 16.1393C26.0109 15.4691 25.0926 14.938 24.1062 14.5677C23.9783 14.52 23.8629 14.444 23.7686 14.3454C23.6743 14.2467 23.6036 14.128 23.5618 13.9981L22.6245 11.1153ZM5.07985 31.8335C5.07998 35.1456 8.30215 37.4838 11.4229 36.5227C12.4735 40.8174 17.3174 42.9304 21.1764 40.8526C21.3207 40.7748 21.4413 40.6594 21.5253 40.5186C21.6093 40.3778 21.6536 40.2169 21.6534 40.0529V37.7624H23.0701C23.3242 37.763 23.572 37.6829 23.7775 37.5335C23.9831 37.3841 24.1359 37.1732 24.2138 36.9313L25.1563 34.0301C26.0382 33.66 26.8697 33.1796 27.6309 32.6005L30.6171 33.2342C30.8656 33.2875 31.1245 33.2605 31.3567 33.1571C31.5889 33.0538 31.7823 32.8795 31.9091 32.6593L34.233 28.6342C34.3605 28.4144 34.4148 28.1599 34.3883 27.9072C34.3618 27.6545 34.2557 27.4168 34.0854 27.2283L32.0419 24.9594C32.1611 24.0114 32.1612 23.0495 32.0418 22.1024L34.0853 19.8341C34.2556 19.6456 34.3616 19.4078 34.3881 19.1552C34.4146 18.9025 34.3602 18.648 34.2328 18.4282L31.9087 14.4031C31.7822 14.1825 31.5889 14.0079 31.3567 13.9044C31.1244 13.8009 30.8653 13.774 30.6167 13.8275L27.6299 14.4628C26.8692 13.8835 26.0382 13.4029 25.1567 13.0325L24.2133 10.1314C24.1352 9.88954 23.9824 9.67876 23.7769 9.52942C23.5713 9.38007 23.3236 9.29987 23.0695 9.3004H21.6529V7.00925C21.6529 6.67517 21.4702 6.36863 21.1759 6.21032C17.3136 4.13241 12.4723 6.24712 11.4225 10.5406C8.30678 9.58643 5.07958 11.8813 5.07958 15.2821C2.65766 15.5789 0.775502 17.6483 0.775635 20.149C0.775635 21.4318 1.26643 22.6321 2.12584 23.5319C1.26656 24.4316 0.775767 25.632 0.7759 26.9133C0.7759 29.4154 2.65819 31.4856 5.08011 31.7815C5.07985 31.7984 5.07985 31.816 5.07985 31.8335Z" fill="url(#paint0_linear_3522_17470)"/>
                        <defs>
                        <linearGradient id="paint0_linear_3522_17470" x1="20.0945" y1="18.6963" x2="-11.8102" y2="52.1224" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1889D8"/>
                        <stop offset="1" stopColor="#01FFF0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <span className='KPIText'>Advisory Actions</span>
                </div>
            </div>
        </div>
        


    );
}

export default KPICard;





