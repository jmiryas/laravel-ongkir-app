<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ongkir App</title>

    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/select-js/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/loading.css') }}">
</head>

<body>
    <div id="loading_row" class="container" style="display: none;">
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div class="spinner-border" role="status">
            </div>

            <div>
                Loading ...
            </div>
        </div>
    </div>


    <div id="ongkir_row" class="container">
        <div class="row justify-content-md-center mt-5">
            <div class="col-12 col-md-8">
                <div class="card border border-success">
                    <div class="card-header bg-success text-center">
                        <span class="text-white fw-bold">ONGKIR INDONESIA</span>
                    </div>

                    <div class="card-body">
                        <form id="ongkirForm">
                            <div class="form-group mb-2">
                                <label for="province-label"><b>Province Asal</b></label>
                                <select id="province_asal" class="js-example-basic-single province_asal"
                                    name="province_asal" style="width: 100%;">
                                    <option value="" selected>--- Pilih Provinsi Asal ---</option>
                                    @foreach ($provinces as $item)
                                    <option value="{{ $item['province_id'] }}">{{ $item["province"] }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div id="kota_asal_form" class="form-group mb-2" style="display: none;">
                                <label for="kota-label"><b>Kota Asal</b></label>
                                <select id="kota_asal" class="js-example-basic-single kota_asal" name="kota_asal"
                                    style="width: 100%;">
                                    <option value="" selected>--- Pilih Kota Asal ---</option>
                                </select>
                            </div>

                            <div class="form-group mb-2">
                                <label for="province-label"><b>Province Tujuan</b></label>
                                <select id="province_tujuan" class="js-example-basic-single province_tujuan"
                                    name="province_tujuan" style="width: 100%;">
                                    <option value="" selected>--- Pilih Provinsi Tujuan ---</option>
                                    @foreach ($provinces as $item)
                                    <option value="{{ $item['province_id'] }}">{{ $item["province"] }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div id="kota_tujuan_form" class="form-group mb-2" style="display: none;">
                                <label for="kota-label"><b>Kota Tujuan</b></label>
                                <select id="kota_tujuan" class="js-example-basic-single kota_tujuan" name="kota_tujuan"
                                    style="width: 100%;">
                                    <option value="" selected>--- Pilih Kota Tujuan ---</option>
                                </select>
                            </div>

                            <div class="row mb-2">
                                <div class="form-group col-md-6">
                                    <label for="beratBarang"><b>Berat Barang</b></label>
                                    <input type="number" class="form-control" id="beratBarang"
                                        placeholder="Masukkan berat barang">
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="satuanBerat"><b>Satuan Berat</b></label>
                                    <select id="satuanBerat" class="form-select" aria-placeholder="Pilih satuan berat">
                                        <option selected>Pilih satuan berat</option>

                                        <option value="ton">ton</option>
                                        <option value="kwintal">kwintal</option>
                                        <option value="ons">ons</option>
                                        <option value="pound">pound</option>
                                        <option value="kg">kg</option>
                                        <option value="hg">hg</option>
                                        <option value="dag">dag</option>
                                        <option value="gram">gram</option>
                                        <option value="dg">dg</option>
                                        <option value="cg">cg</option>
                                        <option value="mg">mg</option>
                                        <option value="lbs">lbs</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group mb-4">
                                <label for="kurir"><b>Kurir</b></label>
                                <select id="kurir" class="form-select" aria-placeholder="Pilih kurir">
                                    <option selected>--- Pilih Kurir ---</option>

                                    <option value="jne">JNE</option>
                                    <option value="tiki">TIKI</option>
                                    <option value="pos">POS</option>
                                </select>
                            </div>

                            <button type="submit" class="btn btn-success" style="width: 100%;">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="{{ asset('js/select-js/select2.min.js') }}"></script>
<script src="{{ asset('js/script.js') }}"></script>

</html>