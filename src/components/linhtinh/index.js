import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';

export default function Linhtinh() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.container_linhtinh}>
                <Grid>
                    <Grid className={classes.line_high}>
                        <Typography className={classes.text_1} >Bạn là người mới?</Typography>
                    </Grid>
                    <Typography style={{ marginBottom: 40 }}>Hãy đăng kí tài khoản để cập nhật những ưu đãi mới nhất từ Nuce Shop</Typography>

                    <Link to={"/register"} className={classes.btn}>Đăng ký ngay</Link>

                    <Typography style={{ marginTop: 50, }}>Hoặc đăng nhập nếu bạn đã có tài khoản</Typography>
                </Grid>
            </Container>
        </Grid>
    )
}
