import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link, useLocation } from 'react-router-dom';



function NavigationBar() {
    // const location = useLocation();

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" id="navigation-bar">
            <Container fluid>
                <Navbar.Brand href="#home">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="76" height="64" viewBox="0 0 73 48" fill="none">
                    <path d="M31.5188 7.78699C31.336 7.95305 31.3692 8.23354 31.4726 8.34673L32.7655 9.76137L32.156 10.315L30.8631 8.90035C30.7079 8.73057 30.4826 8.72813 30.2998 8.8942C30.1169 9.0603 30.1501 9.34079 30.2536 9.45394L31.5464 10.8686L30.9369 11.4222L29.644 10.0076C29.4889 9.83779 29.2635 9.83535 29.0807 10.0015C28.8978 10.1675 28.9311 10.448 29.0345 10.5612L30.7411 12.4285C31.2065 12.9378 31.9952 12.9464 32.5345 12.5601L36.1546 16.5212C36.4649 16.8607 36.9155 16.8656 37.2813 16.5334C37.647 16.2012 37.6839 15.7534 37.3737 15.4139L33.7536 11.4529C34.1895 10.9534 34.2542 10.1698 33.7888 9.66046L32.0822 7.7931C31.9787 7.67992 31.7017 7.62088 31.5188 7.78699ZM32.9965 6.9627L36.0993 10.3579L36.7089 9.80426L39.8118 13.1995C40.122 13.539 40.5728 13.5439 40.9386 13.2117C41.304 12.8796 41.3413 12.4318 41.031 12.0922L33.2736 3.60424C32.2374 4.5454 32.1173 6.00073 32.9965 6.9627ZM36.746 2.52152C35.8927 3.29658 35.998 4.75435 36.9288 5.77292C37.4884 6.50732 38.423 6.79761 39.3944 6.6401L42.8595 10.4314C43.1698 10.7709 43.6206 10.7758 43.986 10.4437C44.3518 10.1115 44.3886 9.66371 44.0784 9.32419L40.6136 5.53288C40.861 4.58314 40.6579 3.62852 39.9764 3.00484C39.0457 1.98628 37.5994 1.74646 36.746 2.52152Z" fill="#171717"/>
                    <path d="M0.999268 30.3046V21.4788H3.50345V28.325H7.72768V30.3046H0.999268ZM12.0202 30.418C11.2698 30.418 10.6037 30.2667 10.0219 29.9641C9.44011 29.6615 8.9806 29.2455 8.64333 28.7159C8.31452 28.1779 8.15011 27.5644 8.15011 26.8751C8.15011 26.1859 8.31452 25.5765 8.64333 25.0469C8.9806 24.5174 9.44011 24.1055 10.0219 23.8113C10.6037 23.5087 11.2698 23.3574 12.0202 23.3574C12.7706 23.3574 13.4367 23.5087 14.0185 23.8113C14.6087 24.1055 15.0682 24.5174 15.3971 25.0469C15.7259 25.5765 15.8903 26.1859 15.8903 26.8751C15.8903 27.5644 15.7259 28.1779 15.3971 28.7159C15.0682 29.2455 14.6087 29.6615 14.0185 29.9641C13.4367 30.2667 12.7706 30.418 12.0202 30.418ZM12.0202 28.5142C12.2985 28.5142 12.543 28.4512 12.7538 28.325C12.973 28.199 13.1458 28.014 13.2723 27.7703C13.3988 27.5181 13.462 27.2197 13.462 26.8751C13.462 26.5305 13.3988 26.2405 13.2723 26.0051C13.1458 25.7614 12.973 25.5765 12.7538 25.4504C12.543 25.3243 12.2985 25.2612 12.0202 25.2612C11.7504 25.2612 11.5059 25.3243 11.2867 25.4504C11.0759 25.5765 10.903 25.7614 10.7681 26.0051C10.6416 26.2405 10.5784 26.5305 10.5784 26.8751C10.5784 27.2197 10.6416 27.5181 10.7681 27.7703C10.903 28.014 11.0759 28.199 11.2867 28.325C11.5059 28.4512 11.7504 28.5142 12.0202 28.5142ZM20.5068 30.418C19.748 30.418 19.0692 30.2667 18.4706 29.9641C17.8804 29.6615 17.4166 29.2455 17.0794 28.7159C16.7421 28.1779 16.5735 27.5644 16.5735 26.8751C16.5735 26.1859 16.7421 25.5765 17.0794 25.0469C17.4166 24.5174 17.8804 24.1055 18.4706 23.8113C19.0692 23.5087 19.748 23.3574 20.5068 23.3574C21.2825 23.3574 21.9529 23.5213 22.5178 23.8491C23.0827 24.1769 23.4832 24.6392 23.7193 25.236L21.8601 26.1816C21.6999 25.8623 21.5017 25.6311 21.2656 25.4882C21.0296 25.3369 20.7724 25.2612 20.4942 25.2612C20.2159 25.2612 19.963 25.3243 19.7353 25.4504C19.5077 25.5765 19.3264 25.7614 19.1915 26.0051C19.065 26.2405 19.0018 26.5305 19.0018 26.8751C19.0018 27.2281 19.065 27.5265 19.1915 27.7703C19.3264 28.014 19.5077 28.199 19.7353 28.325C19.963 28.4512 20.2159 28.5142 20.4942 28.5142C20.7724 28.5142 21.0296 28.4427 21.2656 28.2998C21.5017 28.1485 21.6999 27.9132 21.8601 27.5938L23.7193 28.5394C23.4832 29.1362 23.0827 29.5985 22.5178 29.9263C21.9529 30.2541 21.2825 30.418 20.5068 30.418ZM28.8104 30.3046V29.0311L28.6459 28.7159V26.3708C28.6459 25.9925 28.5279 25.7025 28.2918 25.5008C28.0642 25.2907 27.6974 25.1856 27.1915 25.1856C26.8627 25.1856 26.5296 25.2402 26.1923 25.3495C25.8551 25.4504 25.5684 25.5933 25.3323 25.7782L24.5229 24.1517C24.9107 23.8996 25.3745 23.7062 25.9141 23.5717C26.4621 23.4288 27.006 23.3574 27.5456 23.3574C28.6586 23.3574 29.5186 23.6138 30.1257 24.1265C30.7412 24.6308 31.0489 25.4251 31.0489 26.5095V30.3046H28.8104ZM26.7867 30.418C26.2387 30.418 25.775 30.3256 25.3955 30.1406C25.0161 29.9557 24.7252 29.7036 24.5229 29.3841C24.3289 29.0647 24.232 28.7075 24.232 28.3125C24.232 27.8922 24.3374 27.5307 24.5482 27.2281C24.7674 26.9171 25.1004 26.6818 25.5473 26.5221C25.9942 26.3539 26.5717 26.2699 27.28 26.2699H28.8989V27.5181H27.6088C27.221 27.5181 26.947 27.5812 26.7867 27.7072C26.635 27.8334 26.5591 28.0014 26.5591 28.2116C26.5591 28.4217 26.6392 28.5898 26.7994 28.7159C26.9596 28.842 27.1788 28.905 27.4571 28.905C27.7185 28.905 27.9545 28.842 28.1653 28.7159C28.3845 28.5814 28.5448 28.3797 28.6459 28.1107L28.9748 28.9933C28.8483 29.464 28.5995 29.8212 28.2286 30.065C27.866 30.3004 27.3854 30.418 26.7867 30.418ZM32.5657 30.3046V20.9492H34.9688V30.3046H32.5657ZM40.3247 30.3046V21.4788H44.5109C45.4891 21.4788 46.3491 21.6595 47.0912 22.0209C47.8332 22.3823 48.4106 22.8909 48.8238 23.5465C49.2455 24.2022 49.4563 24.9839 49.4563 25.8917C49.4563 26.7911 49.2455 27.5728 48.8238 28.2368C48.4106 28.8924 47.8332 29.401 47.0912 29.7624C46.3491 30.1238 45.4891 30.3046 44.5109 30.3046H40.3247ZM42.8288 28.3125H44.41C44.9159 28.3125 45.3543 28.22 45.7252 28.0351C46.1045 27.8418 46.3996 27.5644 46.6105 27.2029C46.8213 26.8331 46.9269 26.396 46.9269 25.8917C46.9269 25.3789 46.8213 24.9418 46.6105 24.5804C46.3996 24.219 46.1045 23.9458 45.7252 23.7609C45.3543 23.5675 44.9159 23.4708 44.41 23.4708H42.8288V28.3125ZM50.66 30.3046V23.4708H53.0628V30.3046H50.66ZM51.8614 22.7144C51.423 22.7144 51.0689 22.5925 50.799 22.3487C50.5292 22.105 50.3944 21.8024 50.3944 21.4409C50.3944 21.0795 50.5292 20.7769 50.799 20.5331C51.0689 20.2894 51.423 20.1675 51.8614 20.1675C52.2998 20.1675 52.6539 20.2852 52.9238 20.5205C53.1937 20.7475 53.3284 21.0417 53.3284 21.4031C53.3284 21.7814 53.1937 22.0966 52.9238 22.3487C52.6625 22.5925 52.3084 22.7144 51.8614 22.7144ZM57.1163 30.418C56.5342 30.418 55.9653 30.3508 55.4089 30.2163C54.8606 30.0818 54.418 29.9137 54.0809 29.712L54.8016 28.0729C55.122 28.2662 55.4974 28.4217 55.9273 28.5394C56.3571 28.6487 56.7788 28.7033 57.192 28.7033C57.5966 28.7033 57.875 28.6613 58.0268 28.5772C58.1868 28.4932 58.2672 28.3797 58.2672 28.2368C58.2672 28.1023 58.1911 28.0056 58.0392 27.9468C57.896 27.8796 57.7022 27.8291 57.4576 27.7955C57.2215 27.7619 56.9602 27.7241 56.6736 27.682C56.3866 27.64 56.0958 27.5854 55.8007 27.5181C55.5141 27.4425 55.2486 27.3332 55.0039 27.1903C54.7678 27.039 54.5783 26.8373 54.4351 26.5851C54.2914 26.333 54.2199 26.0135 54.2199 25.6269C54.2199 25.1898 54.3465 24.8032 54.5993 24.4669C54.8606 24.1223 55.24 23.8533 55.7374 23.66C56.2352 23.4583 56.8421 23.3574 57.5589 23.3574C58.0392 23.3574 58.5242 23.4078 59.0131 23.5087C59.5109 23.6011 59.9279 23.7441 60.2654 23.9374L59.5443 25.5638C59.2072 25.3705 58.8698 25.2402 58.5328 25.173C58.1953 25.0974 57.875 25.0595 57.5713 25.0595C57.1667 25.0595 56.8802 25.1058 56.7113 25.1982C56.5513 25.2907 56.4713 25.4041 56.4713 25.5386C56.4713 25.6731 56.5427 25.7782 56.686 25.8538C56.8293 25.9211 57.0192 25.9757 57.2553 26.0178C57.4999 26.0514 57.7655 26.0892 58.0521 26.1312C58.3386 26.1648 58.6256 26.2195 58.9121 26.2951C59.2072 26.3708 59.4728 26.4842 59.7089 26.6356C59.9536 26.7784 60.1473 26.976 60.2906 27.2281C60.4339 27.4719 60.5057 27.7871 60.5057 28.1738C60.5057 28.594 60.3749 28.9723 60.1135 29.3085C59.8608 29.6447 59.4814 29.9137 58.9754 30.1154C58.478 30.3172 57.8583 30.418 57.1163 30.418ZM66.0056 23.3574C66.5368 23.3574 67.0175 23.4667 67.4477 23.6852C67.8775 23.8953 68.215 24.2232 68.4592 24.6686C68.7124 25.1142 68.8386 25.6899 68.8386 26.396V30.3046H66.4358V26.7868C66.4358 26.2993 66.3344 25.9463 66.1321 25.7277C65.9384 25.5008 65.6642 25.3873 65.3101 25.3873C65.0573 25.3873 64.8251 25.4462 64.6147 25.5638C64.4038 25.6731 64.2392 25.8454 64.1212 26.0808C64.0031 26.3161 63.9441 26.6229 63.9441 27.0012V30.3046H61.5413V20.9492H63.9441V25.4125L63.3877 24.8452C63.649 24.3492 64.0074 23.9794 64.4629 23.7356C64.9179 23.4835 65.4324 23.3574 66.0056 23.3574Z" fill="#B57A0E"/>
                    <path d="M18.9314 45.1909C18.2316 45.1909 17.5824 45.0817 16.9837 44.863C16.3935 44.6362 15.8792 44.3168 15.4407 43.905C15.0107 43.4931 14.6734 43.0096 14.4289 42.4549C14.1844 41.8917 14.0621 41.2739 14.0621 40.6015C14.0621 39.9291 14.1844 39.3155 14.4289 38.7608C14.6734 38.1976 15.0107 37.7101 15.4407 37.2982C15.8792 36.8863 16.3935 36.5712 16.9837 36.3526C17.5824 36.1257 18.2316 36.0122 18.9314 36.0122C19.7493 36.0122 20.4786 36.1551 21.1194 36.4409C21.7686 36.7267 22.3083 37.1385 22.7383 37.6765L21.1447 39.1139C20.858 38.7775 20.5419 38.5213 20.1962 38.3447C19.8589 38.1682 19.4795 38.08 19.0579 38.08C18.6953 38.08 18.3623 38.1388 18.0587 38.2565C17.7552 38.3742 17.4938 38.5465 17.2746 38.7732C17.0638 38.9919 16.8952 39.2567 16.7687 39.5675C16.6506 39.8788 16.5916 40.2233 16.5916 40.6015C16.5916 40.9797 16.6506 41.3246 16.7687 41.6354C16.8952 41.9466 17.0638 42.2153 17.2746 42.4425C17.4938 42.6608 17.7552 42.8292 18.0587 42.9469C18.3623 43.0646 18.6953 43.1234 19.0579 43.1234C19.4795 43.1234 19.8589 43.0351 20.1962 42.8586C20.5419 42.6821 20.858 42.4255 21.1447 42.0895L22.7383 43.5268C22.3083 44.0563 21.7686 44.4682 21.1194 44.7624C20.4786 45.0481 19.7493 45.1909 18.9314 45.1909ZM26.9587 45.1278C26.2084 45.1278 25.5422 44.9768 24.9605 44.6741C24.3787 44.3714 23.9192 43.9553 23.5819 43.4257C23.2531 42.8881 23.0887 42.2741 23.0887 41.5851C23.0887 40.8957 23.2531 40.2864 23.5819 39.7568C23.9192 39.2273 24.3787 38.8154 24.9605 38.5213C25.5422 38.2187 26.2084 38.0673 26.9587 38.0673C27.7092 38.0673 28.3753 38.2187 28.957 38.5213C29.5473 38.8154 30.0068 39.2273 30.3356 39.7568C30.6645 40.2864 30.8289 40.8957 30.8289 41.5851C30.8289 42.2741 30.6645 42.8881 30.3356 43.4257C30.0068 43.9553 29.5473 44.3714 28.957 44.6741C28.3753 44.9768 27.7092 45.1278 26.9587 45.1278ZM26.9587 43.2241C27.237 43.2241 27.4815 43.161 27.6923 43.0351C27.9116 42.909 28.0844 42.7239 28.2109 42.4801C28.3373 42.2281 28.4006 41.9296 28.4006 41.5851C28.4006 41.2406 28.3373 40.9502 28.2109 40.7149C28.0844 40.4714 27.9116 40.2864 27.6923 40.1602C27.4815 40.0344 27.237 39.9713 26.9587 39.9713C26.689 39.9713 26.4444 40.0344 26.2252 40.1602C26.0144 40.2864 25.8416 40.4714 25.7067 40.7149C25.5802 40.9502 25.517 41.2406 25.517 41.5851C25.517 41.9296 25.5802 42.2281 25.7067 42.4801C25.8416 42.7239 26.0144 42.909 26.2252 43.0351C26.4444 43.161 26.689 43.2241 26.9587 43.2241ZM31.942 45.0144V38.1808H34.2312V40.173L33.8897 39.6055C34.0921 39.093 34.4209 38.7105 34.8763 38.4582C35.3315 38.1976 35.8838 38.0673 36.533 38.0673V40.2233C36.4234 40.2066 36.3265 40.1981 36.2422 40.1981C36.1663 40.1896 36.082 40.1853 35.9892 40.1853C35.5002 40.1853 35.1039 40.3201 34.8003 40.5891C34.4968 40.8496 34.3451 41.2781 34.3451 41.875V45.0144H31.942ZM41.9894 38.0673C42.5206 38.0673 43.0009 38.1766 43.4311 38.3952C43.861 38.6053 44.1984 38.9331 44.4426 39.3786C44.6958 39.8242 44.8224 40.3998 44.8224 41.1059V45.0144H42.4192V41.4968C42.4192 41.0091 42.3179 40.6561 42.1156 40.4377C41.9218 40.2109 41.6477 40.0971 41.2935 40.0971C41.0408 40.0971 40.8089 40.1559 40.5981 40.2736C40.3873 40.3831 40.2226 40.5554 40.1046 40.7908C39.9865 41.0261 39.9275 41.3327 39.9275 41.7113V45.0144H37.5247V38.1808H39.8137V40.1226L39.3711 39.5551C39.6324 39.0593 39.9908 38.6894 40.4463 38.4456C40.9014 38.1934 41.4159 38.0673 41.9894 38.0673ZM50.0093 45.1278C49.1997 45.1278 48.4914 44.9768 47.8845 44.6741C47.2858 44.3629 46.8179 43.9429 46.4808 43.4133C46.1519 42.8753 45.9873 42.266 45.9873 41.5851C45.9873 40.9042 46.1476 40.2991 46.468 39.7696C46.7969 39.2315 47.2481 38.8154 47.8212 38.5213C48.3947 38.2187 49.0397 38.0673 49.7565 38.0673C50.431 38.0673 51.0464 38.206 51.6029 38.4834C52.1593 38.7523 52.6019 39.1518 52.9308 39.6813C53.2597 40.2109 53.424 40.8539 53.424 41.6102C53.424 41.6942 53.4197 41.791 53.4115 41.9002C53.403 42.0093 53.3945 42.1104 53.3863 42.2029H47.9602V40.9421H52.1088L51.1982 41.2951C51.2064 40.9839 51.1474 40.7149 51.0212 40.4881C50.9031 40.2612 50.7342 40.0847 50.5152 39.9585C50.3044 39.8323 50.0555 39.7696 49.7689 39.7696C49.4824 39.7696 49.2292 39.8323 49.0102 39.9585C48.7993 40.0847 48.6351 40.2655 48.517 40.5008C48.399 40.7277 48.34 40.9967 48.34 41.3075V41.6733C48.34 42.0093 48.4072 42.2997 48.5423 42.5431C48.6856 42.787 48.8879 42.9763 49.1492 43.1106C49.4105 43.2368 49.7227 43.2999 50.085 43.2999C50.4224 43.2999 50.709 43.2535 50.9451 43.161C51.1897 43.0603 51.4301 42.909 51.6661 42.7073L52.9308 44.0184C52.6019 44.3799 52.1973 44.6571 51.7166 44.8506C51.2359 45.0357 50.667 45.1278 50.0093 45.1278ZM54.5322 45.0144V38.1808H56.8212V40.173L56.4799 39.6055C56.6822 39.093 57.0111 38.7105 57.4661 38.4582C57.9216 38.1976 58.4738 38.0673 59.123 38.0673V40.2233C59.0135 40.2066 58.9164 40.1981 58.8322 40.1981C58.7561 40.1896 58.6718 40.1853 58.579 40.1853C58.0901 40.1853 57.6937 40.3201 57.3904 40.5891C57.0868 40.8496 56.935 41.2781 56.935 41.875V45.0144H54.5322Z" fill="#B57A0E"/>
                </svg> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        id="nav-links">
                        <Nav.Link as={Link} to="/landing" active={location.pathname === '/landing'} >Projects</Nav.Link>
                        <Nav.Link as={Link} to="/menu" active={location.pathname === '/menu'} >Menu</Nav.Link>
                        <Nav.Link as={Link} to="/vendorspage" active={location.pathname === '/vendorspage'} >Vendors Page</Nav.Link>   
                    </Nav>
                    <Form className="d-flex">
                        <img
                        alt="Profile picture"
                        src="\images\Navbar profile pic.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        />{' '}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default NavigationBar;