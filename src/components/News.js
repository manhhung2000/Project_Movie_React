import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './News.css';

import latMat from '../components/news/dien-anh-24h/img/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png';
import bocTem from '../components/news/dien-anh-24h/img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png';
import woman from '../components/news/dien-anh-24h/img/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png';
import khaiTruong from '../components/news/dien-anh-24h/img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg';
import mortal from '../components/news/dien-anh-24h/img/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png';
import ngoThanhVan from '../components/news/dien-anh-24h/img/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png';
import tiecTrangMau from '../components/news/dien-anh-24h/img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png';
import parkSeoJoon from '../components/news/dien-anh-24h/img/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png';

import american from '../components/news/review/img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png';
import black from '../components/news/review/img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png';
import covid from '../components/news/review/img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg';
import blood from '../components/news/review/img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg';
import dinhThu from '../components/news/review/img/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png';
import veSi from '../components/news/review/img/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg';
import spiderman from '../components/news/review/img/review-spider-man-into-the-spider-vesre-15886520889426.png';
import tanTich from '../components/news/review/img/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png';

import psm30k from '../components/news/khuyen-mai/img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg';
import thu6 from '../components/news/khuyen-mai/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg';
import beta from '../components/news/khuyen-mai/img/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png';
import trangTi from '../components/news/khuyen-mai/img/bhd-59k-ve-ca-tuan-16190002421777.jpg';
import bhd59k from '../components/news/khuyen-mai/img/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg';
import dongGia from '../components/news/khuyen-mai/img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png';
import mega from '../components/news/khuyen-mai/img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg';
import tix1k from '../components/news/khuyen-mai/img/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg';
import { Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  News: {
    maxWidth: 940,
    margin: 'auto',
    marginTop: 150,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    textDecoration: 'none',
  },
  LabelsList: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 700,
  },
}));

export default function News() {
  const classes = useStyles();
  const [render, setRender] = useState(0);

  const [visibleDienAnh, setVisibleDienAnh] = useState(1);
  const [visibleKhuyenMai, setVisibleKhuyenMai] = useState(1);
  const [visibleReview, setVisibleReview] = useState(1);

  const handleChange = (event, newValue) => {
    setRender(newValue);
  };

  const dataDienAnh = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const dataReview = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const dataKhuyenMai = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  // ------------------------------- ONCLICK SHOWMORE --------------------------------------
  const showMoreItemDienAnh = () => {
    setVisibleDienAnh((prevValue) => prevValue + 1);
  };
  const showMoreItemReview = () => {
    setVisibleReview((prevValue) => prevValue + 1);
  };
  const showMoreItemKhuyenMai = () => {
    setVisibleKhuyenMai((prevValue) => prevValue + 1);
  };

  // ------------------------------- RENDER BUTTON SHOWMORE --------------------------------------
  const renderButtonDienAnh = () => {
    return (
      <div className="btnShowMore">
        <button onClick={showMoreItemDienAnh}>XEM TH??M</button>
      </div>
    );
  };
  const renderButtonReview = () => {
    return (
      <div className="btnShowMore">
        <button onClick={showMoreItemReview}>XEM TH??M</button>
      </div>
    );
  };
  const renderButtonKhuyenMai = () => {
    return (
      <div className="btnShowMore">
        <button onClick={showMoreItemKhuyenMai}>XEM TH??M</button>
      </div>
    );
  };

  // ------------------------------- RENDER --------------------------------------
  const renderDienAnh = () => {
    return dataDienAnh.slice(0, visibleDienAnh).map((item, index) => {
      return (
        <div className="news-dien-anh" key={index}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={latMat} alt="" />
                </a>
                <a href="">
                  <p>
                    ???n ?????nh ch???c n???ch ng??y kh???i chi???u 16.04, L?? H???i tung clip
                    L???t M???t: 48H ?????m ch???t
                  </p>
                </a>
                <p>
                  Tr?????c th???m kh???i chi???u 16.04 n??y, L?? H???i b???t ng??? tung clip r?????t
                  ??u???i gay c???n th??t tim fans h??m m???
                </p>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={mortal} alt="" />
                </a>
                <a href="">
                  <p>
                    [MORTAL KOMBAT: CU???C CHI???N SINH T???] - G???I T??N NH???NG PHIM
                    ??I???N ???NH N???I TI???NG ???????C CHUY???N TH??? T??? C??C T???A GAME ????NH ????M
                  </p>
                </a>
                <p>
                  B??n c???nh nh???ng k???ch b???n g???c m???i m??? v?? ?????y b???t ng???, Hollywood
                  c??ng kh??ng thi???u nh???ng t??c ph???m ????nh ????m ???????c chuy???n th??? t???
                  ti???u thuy???t, phim ho???t h??nh, hay th???m ch?? l?? c??? tr?? ch??i ??i???n
                  t???.
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={woman} alt="" />
                </a>
                <a href="">
                  <p>
                    PROMISING YOUNG WOMAN | B??ng h???ng n?????c Anh Carey Mulligan v??
                    m??n tr??? th?? ????n ??ng ????? ?????i
                  </p>
                </a>
                <p>
                  ????? c??? gi???i Oscar danh gi?? v???a g???i t??n Carey Mulligan ??? h???ng
                  m???c n??? ch??nh xu???t s???c nh???t cho vai di???n "?????m m??u" nh???t s???
                  nghi???p c???a c?? trong phim Promising Young Woman (t???a Vi???t: C??
                  G??i Tr??? H???a H???n).{' '}
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={parkSeoJoon} alt="" />
                </a>
                <a href="">
                  <p>
                    V???A ?????P L???I V???A T??I N??NG, D??N SAO NAM C???A PHIM ???B??N TAY DI???T
                    QU?????? ?????M B???O ?????N TIM H???I CH??? EM
                  </p>
                </a>
                <p>
                  Quy t??? 3 nam t??i t??? v???a ??i???n trai, v???a ???????c ????nh gi?? cao v???
                  n??ng l???c di???n xu???t l?? Park Seo Joon, Woo Do Hwan v?? Choi Woo
                  Sik, t??c ph???m kinh d??? ??? h??nh ?????ng ???B??n Tay Di???t Qu?????? h???a h???n
                  s??? l??m cho h???i ch??? em ph???i m?? m???n v??o th??ng t???i.
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={khaiTruong} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Khai tr????ng r???p x???n gi?? ngon, chu???n x??-tai S??i G??n
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={bocTem} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        ???B??c tem??? t??? h???p gi???i tr?? m???i toanh c???a gi???i H?? Th??nh
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={tiecTrangMau} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Ti???c Tr??ng M??u ch??nh th???c c??n m???c 100 t??? ch??? sau 2 tu???n
                        c??ng chi???u
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={ngoThanhVan} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        NG?? THANH V??N CH??NH TH???C KH???I ?????NG CU???C THI THI???T K???
                        TRANG PH???C CHO SI??U ANH H??NG ?????U TI??N C???A VI???T NAM ???
                        VINAMAN
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    });
  };

  const renderKhuyenMai = () => {
    return dataKhuyenMai.slice(0, visibleKhuyenMai).map((item, index) => {
      return (
        <div className="news-dien-anh" key={index}>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={trangTi} alt="" />
                </a>
                <a href="">
                  <p>BHD 59K/V?? C??? TU???N !!!</p>
                </a>
                <p>
                  T???n h?????ng ??u ????i l??n ?????n 3 V?? BHD Star m???i tu???n ch??? v???i gi??
                  59k/v?? khi mua v?? tr??n TIX ho???c M???c V?? Phim tr??n ZaloPay.
                </p>
              </div>
            </Grid>
            <Grid item md={6} sm={12}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={tix1k} alt="" />
                </a>
                <a href="">
                  <p>TIX 1K/V?? NG???I CHI GI?? V??</p>
                </a>
                <p>
                  ?????ng gi?? 1k/v?? c??? tu???n t???t c??? c??c r???p tr??n TIX + Nh???n th??m 02
                  voucher thanh to??n ZaloPay th??? ga
                </p>
              </div>
            </Grid>
            <Grid item md={4} sm={12}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={dongGia} alt="" />
                </a>
                <a href="">
                  <p>?????NG GI?? 1K/V?? KHI MUA V?? QUA TIX </p>
                </a>
                <p>
                  ?????NG GI?? 1K/V?? KHI MUA V?? QUA TIX H??nh tr??nh t??m R??m v?? Ph??c
                  ch??? v???i 1k c??? tu???n + nh???n th??m 02 voucher khi ?????t v?? qua TIX.
                </p>
              </div>
            </Grid>
            <Grid item md={4} sm={12}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={bhd59k} alt="" />
                </a>
                <a href="">
                  <p>BHD STAR V?? CH??? 59.000?? C??? TU???N!</p>
                </a>
                <p>
                  T???n h?????ng ??u ????i l??n ?????n 3 V?? BHD Star m???i tu???n ch??? v???i gi??
                  59k/v?? khi mua v?? tr??n TIX v?? thanh to??n b???ng ZaloPay ho???c M???c
                  V?? Phim tr??n ZaloPay.
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={beta} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Beta Cineplex tr??? l???i v???i h??ng lo???t ??u ????i l???n
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={thu6} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [123Phim] Th??? 6 Kh??ng ??en T???i - ??u ????i hu??? di???t 11k/v??
                        Anh Trai Y??u Qu??i
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={psm30k} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [123Phim] NH???P M?? 'PSM30K' - Gi???m ngay 30k khi ?????t v??
                        Ph??p S?? M??: Ai Ch???t Gi?? Tay
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2} xs={12}>
                    <a href="">
                      <img className="newsImgSmall" src={mega} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [Mega GS] M???t ??o?? hoa thay ng??n l???i y??u
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    });
  };
  const renderReview = () => {
    return dataReview.slice(0, visibleReview).map((item, index) => {
      return (
        <div className="news-dien-anh" key={index}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={tanTich} alt="" />
                </a>
                <a href="">
                  <p>
                    Review: T??n T??ch Qu??? ??m (Relic) - Ba th??? h??? v?? m???i li??n k???t
                  </p>
                </a>
                <p>
                  ??i???m nh???n c???a phim kinh d??? n??m 2020 ch??nh l?? T??n T??ch Qu??? ??m
                </p>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={dinhThu} alt="" />
                </a>
                <a href="">
                  <p>Review: Dinh Th??? Oan Khu???t (Ghost Of War)</p>
                </a>
                <p>
                  Tuy l?? m???t b??? phim c?? ch???t l?????ng t???t, nh??ng c?? v??? Dinh Th??? Oan
                  Khu???t v???n ch??a ????? ????? ??em kh??n gi??? tr??? l???i ph??ng v??!
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={black} alt="" />
                </a>
                <a href="">
                  <p>???BlacKkKlansman??? - c???c n?????c l???nh ????? ng?????i M??? th???c t???nh</p>
                </a>
                <p>
                  T??c ph???m nh???n ????? c??? Phim truy???n xu???t s???c t???i Oscar 2019 c???a
                  ?????o di???n Spike Lee l?? m???t l??t c???t n???a v??? n???n ph??n bi???t ch???ng
                  t???c - n???i ??au g??y nh???c nh???i n?????c M??? cho t???i t???n h??m nay.
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={american} alt="" />
                </a>
                <a href="">
                  <p>American Sniper - Ch??nh ngh??a hay phi ngh??a?</p>
                </a>
                <p>
                  American Sniper kh???c h???a m???t tay s??ng b???n t???a ???huy???n tho???i???
                  c???a H???i qu??n M??? v???i 4 l???n tham chi???n ??? Trung ????ng. C??u chuy???n
                  phim ch???m r??i ????a ng?????i xem qua t???ng th???i kh???c kh??c nhau c???a
                  Kyle, t??? th???a nh???, thi???u ni??n, r???i gia nh???p qu??n ?????i, r???i tham
                  chi???n. T???ng kho???nh kh???c b???t ?????u nh??? nh??ng...
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={spiderman} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Review: Spider-Man: Into The Spider-Vesre
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={covid} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        COVID-19 l?? b???n ch??nh th???c c???a MEV-1 phim contagion
                        (2011)
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={veSi} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [Review] Si??u V??? S?? S??? V??? - Gi???i c???u T???ng th???ng ch??a bao
                        gi??? l???y l???i v?? h??i h?????c ?????n th???
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={blood} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [Review] Bloodshot - M??? m??n ???n t?????ng cho V?? tr??? Si??u anh
                        h??ng Valiant
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    });
  };

  return (
    <div id="tin-tuc" className="news" className={classes.News}>
      <Tabs
        value={render}
        onChange={handleChange}
        centered
        className={classes.LabelsList}
      >
        <Tab className={classes.label} label="??i???n ???nh" />
        <Tab className={classes.label} label="Review" />
        <Tab className={classes.label} label="Khuy???n m??i" />
      </Tabs>

      {render === 0 ? renderDienAnh() : ''}
      {render === 1 ? renderReview() : ''}
      {render === 2 ? renderKhuyenMai() : ''}

      {render === 0 ? renderButtonDienAnh() : ''}
      {render === 1 ? renderButtonReview() : ''}
      {render === 2 ? renderButtonKhuyenMai() : ''}
    </div>
  );
}
