import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch } from "react-redux";
import { Button, Grid, TextField } from "@material-ui/core";
import { addNewMovieAction } from "../store/actions/adminAction";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
  },
}));

export default function ModalAddMovie(props) {
  const open = props?.open;
  const handleClose = props?.handleClose;
  const maNhom = props?.maNhom;
  const soTrang = props?.soTrang;
  const soPhanTuTrenTrang = props?.soPhanTuTrenTrang;
  const dispatch = useDispatch();
  const classes = useStyles();

  const [movie, setMovie] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: "",
    danhGia: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "hinhAnh") {
      setMovie({
        hinhAnh: e.target.files[0],
      });
    } else {
      setMovie({
        ...movie,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in movie) {
      form_data.append(key, movie[key]);
    }
    if (
      movie.maPhim !== "" &&
      movie.tenPhim !== "" &&
      movie.biDanh !== "" &&
      movie.trailer !== "" &&
      movie.hinhAnh !== "" &&
      movie.moTa !== "" &&
      movie.maNhom !== "" &&
      movie.ngayKhoiChieu !== "" &&
      movie.danhGia !== ""
    ) {
      dispatch(
        addNewMovieAction(form_data, maNhom, soTrang, soPhanTuTrenTrang)
      );
    } else {
      alert("th??m phim th???t b???i");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleSubmit} className={classes.paper} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="maPhim"
                  name="maPhim"
                  variant="outlined"
                  required
                  label="M?? phim"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="tenPhim"
                  name="tenPhim"
                  variant="outlined"
                  required
                  label="T??n phim"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="biDanh"
                  name="biDanh"
                  variant="outlined"
                  required
                  label="B?? danh"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="trailer"
                  name="trailer"
                  variant="outlined"
                  required
                  label="Trailer"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="hinhAnh"
                  name="hinhAnh"
                  variant="outlined"
                  required
                  label="H??nh ???nh"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                  type="file"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="moTa"
                  name="moTa"
                  variant="outlined"
                  required
                  label="M?? t???"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <select
                  name="maNhom"
                  onChange={handleChange}
                  value={movie.maNhom}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="ngayKhoiChieu"
                  name="ngayKhoiChieu"
                  variant="outlined"
                  required
                  label="Ng??y kh???i chi???u"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  autoComplete="danhGia"
                  name="danhGia"
                  variant="outlined"
                  required
                  label="????nh gi??"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth>
              Th??m
            </Button>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
