// Global variable

let origin_id;
let destination;
let beratBarang = 0.0;
let courier;

// End of global variable

$(document).ready(function () {
    $(".province_asal").select2({
        placeholder: "--- Pilih Provinsi Asal ---",
        // allowClear: true,
    });

    $(".province_tujuan").select2({
        placeholder: "--- Pilih Provinsi Tujuan ---",
        // allowClear: true,
    });

    $(".kota_asal").select2({
        placeholder: "--- Pilih Kota Asal ---",
        // allowClear: true,
    });

    $(".kota_tujuan").select2({
        placeholder: "--- Pilih Kota Tujuan ---",
        // allowClear: true,
    });
});

// --- Provinsi Asal ---

$("#province_asal").change(() => {
    var provinceAsal = $("#province_asal").val();

    var kotaAsalForm = document.getElementById("kota_asal_form");
    var kotaAsal = document.getElementById("kota_asal");

    var loadingRow = document.getElementById("loading_row");
    var ongkirRow = document.getElementById("ongkir_row");

    kotaAsalForm.style.display = "none";
    loadingRow.style.display = "block";

    ongkirRow.style.display = "none";

    kotaAsal.options.length = 0;

    $.ajax({
        dataType: "json",
        type: "GET",
        url: `http://127.0.0.1:8000/api/kota-asal/${provinceAsal}`,
    })
        .then(function (data) {
            var opt = document.createElement("option");
            opt.innerHTML = `--- Pilih Kota Asal ---`;
            opt.setAttribute("selected", "selected");
            kotaAsal.appendChild(opt);

            for (let i = 0; i < data.length; i++) {
                var opt = document.createElement("option");
                opt.value = data[i]["city_id"];
                opt.innerHTML = `${data[i]["type"]} - ${data[i]["city_name"]}`;
                kotaAsal.appendChild(opt);
            }
        })
        .done(() => {
            kotaAsalForm.style.display = "block";
            loadingRow.style.display = "none";
            ongkirRow.style.display = "block";
        });
});

$("#kota_asal").on("select2:select", function (e) {
    var data = e.params.data;

    origin_id = data["id"];
});

// --- Provinsi Tujuan ---

$("#province_tujuan").change(() => {
    var provinceTujuan = $("#province_tujuan").val();

    var kotaTujuanForm = document.getElementById("kota_tujuan_form");
    var kotaTujuan = document.getElementById("kota_tujuan");

    var loadingRow = document.getElementById("loading_row");
    var ongkirRow = document.getElementById("ongkir_row");

    kotaTujuanForm.style.display = "none";
    loadingRow.style.display = "block";

    ongkirRow.style.display = "none";

    kotaTujuan.options.length = 0;

    $.ajax({
        dataType: "json",
        type: "GET",
        url: `http://127.0.0.1:8000/api/kota-tujuan/${provinceTujuan}`,
    })
        .then(function (data) {
            var opt = document.createElement("option");
            opt.innerHTML = `--- Pilih Kota Tujuan ---`;
            opt.setAttribute("selected", "selected");
            kotaTujuan.appendChild(opt);

            for (let i = 0; i < data.length; i++) {
                var opt = document.createElement("option");
                opt.value = data[i]["city_id"];
                opt.innerHTML = `${data[i]["type"]} - ${data[i]["city_name"]}`;
                kotaTujuan.appendChild(opt);
            }
        })
        .done(() => {
            kotaTujuanForm.style.display = "block";
            loadingRow.style.display = "none";
            ongkirRow.style.display = "block";
        });
});

// --- Kota Tujuan ---

$("#kota_tujuan").on("select2:select", function (e) {
    var data = e.params.data;

    destination = data["id"];
});

// Pilih satuan berat.

$("#satuanBerat").change(() => {
    var satuanBerat = $("#satuanBerat").val();
    beratBarang = $("#beratBarang").val();

    switch (satuanBerat) {
        case "ton":
            beratBarang = beratBarang * 1000000;
            break;
        case "kwintal":
            beratBarang = beratBarang * 100000;
            break;
        case "ons":
            beratBarang = beratBarang * 100;
            break;
        case "lbs":
            beratBarang = beratBarang * 2204.62;
            break;
        case "pound":
            beratBarang = beratBarang * 2204.62;
            break;
        case "kg":
            beratBarang = beratBarang * 1000;
            break;
        case "hg":
            beratBarang = beratBarang * 100;
            break;
        case "dag":
            beratBarang = beratBarang * 10;
            break;
        case "gram":
            beratBarang = beratBarang;
            break;
        case "dg":
            beratBarang = beratBarang / 10;
            break;
        case "cg":
            beratBarang = beratBarang / 100;
            break;
        case "mg":
            beratBarang = beratBarang / 1000;
            break;
        default:
            beratBarang = beratBarang;
    }
});

// Input berat barang.

$("#beratBarang").change(() => {
    var satuanBerat = $("#satuanBerat").val();
    beratBarang = $("#beratBarang").val();

    switch (satuanBerat) {
        case "ton":
            beratBarang = beratBarang * 1000000;
            break;
        case "kwintal":
            beratBarang = beratBarang * 100000;
            break;
        case "ons":
            beratBarang = beratBarang * 100;
            break;
        case "lbs":
            beratBarang = beratBarang * 2204.62;
            break;
        case "pound":
            beratBarang = beratBarang * 2204.62;
            break;
        case "kg":
            beratBarang = beratBarang * 1000;
            break;
        case "hg":
            beratBarang = beratBarang * 100;
            break;
        case "dag":
            beratBarang = beratBarang * 10;
            break;
        case "gram":
            beratBarang = beratBarang;
            break;
        case "dg":
            beratBarang = beratBarang / 10;
            break;
        case "cg":
            beratBarang = beratBarang / 100;
            break;
        case "mg":
            beratBarang = beratBarang / 1000;
            break;
        default:
            beratBarang = beratBarang;
    }
});

// Select kurir.

$("#kurir").change(() => {
    var kurir = $("#kurir").val();

    courier = kurir;
});

// Cek ongkir.

$("#ongkirForm").submit(function (evt) {
    evt.preventDefault();

    var loadingRow = document.getElementById("loading_row");
    var ongkirRow = document.getElementById("ongkir_row");

    loadingRow.style.display = "block";
    ongkirRow.style.display = "none";

    $.ajax({
        type: "POST",
        url: `http://127.0.0.1:8000/api/get-ongkir/${origin_id}/${destination}/${beratBarang}/${courier}`,
    })
        .then(function (data) {
            const list = document.createElement("ul");
            let courierName;

            list.className = "list-group";

            data.forEach((item) => {
                courierName = item["name"];

                item.costs.forEach((cost) => {
                    const listClass = [
                        "list-group-item",
                        "d-flex",
                        "justify-content-between",
                        "align-items-center",
                    ];
                    const spanClass = [
                        "badge",
                        "badge-primary",
                        "badge-pill",
                        "text-success",
                    ];

                    const listItem = document.createElement("li");
                    const spanItem = document.createElement("span");

                    listItem.classList.add(...listClass);
                    spanItem.classList.add(...spanClass);

                    listItem.innerHTML = `${cost["service"]} (${cost["description"]}) | ${cost["cost"][0]["etd"]} hari`;

                    const costMoney = Intl.NumberFormat("ID", {
                        maximumSignificantDigits: 3,
                    }).format(cost["cost"][0]["value"]);

                    spanItem.innerHTML = `Rp ${costMoney}`;

                    listItem.appendChild(spanItem);
                    list.appendChild(listItem);
                });
            });

            Swal.fire({
                title: courierName,
                html: list,
                showCancelButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    $("#province_asal").val("");
                    $("#kota_asal").val("");

                    $("#province_tujuan").val("");
                    $("#kota_tujuan").val("");

                    $("#beratBarang").val("");
                    $("#satuanBerat").val("");

                    $("#kurir").val("");

                    location.reload();
                }
            });
        })
        .done(() => {
            loadingRow.style.display = "none";
            ongkirRow.style.display = "block";
        });
});
