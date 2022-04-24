/**
 * ︻╦╤─ ҉ – – Bài 1
 */

/** ︻╦╤─ ҉ – –
 * 
 * Mô hình 3 khối
 * - Đầu vào:
 *      - Nhập vào dữ liệu: điểm chuẩn, khu vực, đối tượng, điểm môn 1, điểm môn 2, điểm môn 3.
 * - Xử lý:
 *      - nếu điểm 1 trong 3 môn là 0 thì không đậu, không cần xét
 *      - nếu điểm tổng kết >= điểm chuẩn thì đậu
 *      - ngược lại không đậu
 *      - điểm tổng = tổng điểm 3 môn + điểm ưu tiên
 * - Đầu ra:
 *      - Show kết quả
 */

// ︻╦╤─ ҉ – – Code

function getId(n) {
    return document.getElementById(n);
}

function diemTongKet(diem1, diem2, diem3, khuVuc, doiTuong) {
    diemTong = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    return diemTong;
}

getId("ketQua").onclick = function() {

    var diem1 = getId("diem1").value * 1;
    var diem2 = getId("diem2").value * 1;
    var diem3 = getId("diem3").value * 1;
    var khuVuc = getId("khuVuc").value * 1;
    var doiTuong = getId("doiTuong").value * 1;
    var diemChuan = getId("diemChuan").value * 1;
    var ketQua = "";
    var diemTong = diemTongKet(diem1, diem2, diem3, khuVuc, doiTuong);

    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {

        ketQua = "Không đậu";

    } else {

        if (diemTong >= diemChuan) {

            ketQua = "Đậu"

        } else {

            ketQua = "Không đậu";

        }
    }

    getId("ft1").innerHTML = ketQua + ".<br> Tổng điểm: " + diemTong;
}

// ︻╦╤─ ҉–– ---------------------------------------------------------------------

/**
 * ︻╦╤─ ҉ – – Bài 2
 */

/** ︻╦╤─ ҉ – –
 * 
 * Mô hình 3 khối
 * - Đầu vào
 *      - 
 *      - 
 *      - 
 *      - 
 *      - 
 *      - 
 *      - 
 */

// ︻╦╤─ ҉ – – Code

const soKw1 = 500;
const soKw2 = 650;
const soKw3 = 850;
const soKw4 = 1100;
const soKw5 = 1300;

function tinhTienDien(soKw, soKw1, soKw2, soKw3, soKw4, soKw5) {

    var tien1 = soKw * soKw1;
    var tien2 = (soKw - 50) * soKw2;
    var tien3 = (soKw - 100) * soKw3;
    var tien4 = (soKw - 200) * soKw4;
    var tien5 = (soKw - 350) * soKw5;

    if (0 < soKw && soKw <= 50) {

        tongTien = tien1;

    } else if (50 < soKw && soKw <= 100) {

        tongTien = tien1 + tien2;

    } else if (100 < soKw && soKw <= 200) {

        tongTien = tien1 + tien2 + tien3;

    } else if (200 < soKw && soKw <= 350) {

        tongTien = tien1 + tien2 + tien3 + tien4;

    } else if (350 < soKw) {

        tongTien = tien1 + tien2 + tien3 + tien4 + tien5;
    }
    return tongTien;
}

getId("ketQua1").onclick = function() {

    var hoTen = getId("hoTen").value;
    var soKw = getId("soKw").value * 1;
    var currentFormat = new Intl.NumberFormat("vn-VN")
    var tongTien = "";

    tongTien = tinhTienDien(soKw, soKw1, soKw2, soKw3, soKw4, soKw5);

    var tienDien = "Họ tên: " + hoTen + "<br>Tiền điện: " + currentFormat.format(tongTien) + " VNĐ.";

    getId("ft2").innerHTML = tienDien;
}