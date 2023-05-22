import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    prdocut_container: {
        display: "flex",
        gap: "20px",
        padding: "20px"
    },
    product: {
        background: 'linear-gradient(#FE6B8B , #FF8E53 )',
        display: "flex",
        flexDirection: 'column',
        padding: "10px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "all 0.5s",
        '&:hover': {
            boxShadow: "0px 0px 20px grey",
            scale: 1.05
        }
    },
    AppDark: {
        background: '#121212',
        minHeight: "100vh",
        color: "white"
    },
    AppLight: {
        background: 'white',
        minHeight: "100vh",
        color: "black"
    }
});

export default useStyles