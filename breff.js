const kredivo = {
  BL_format_url:
    "https://www.bukalapak.com/payment/purchases/BL19143ZL6V7INV/kredivo_redirect",

  url_redirect_1:
    "https://api.kredivo.id/kredivo/v2/signin?tk=MNCd5+cNxtCb6fTCaYWv4VJHv/I1uUJRAjU4ER9BHZtxV3G/QrHF3fLjpUjG5CqVtrF5Padaylg9EgiBFqJz+96daCOmaL5S2k7tYXxzUW0=",

  url_redirect_2:
    "https://api.kredivo.id/kredivo/v2/signin?tk=3JGLj2Edjtf81zxqFcpSZKxfVn6+yEc03Ik5+2ZJD3vKdDdCI4MpWrqJiDQ4i4z7xR+OB6VNJNApBEsFL9gV6Qc50nh+xBd65CH5GHuP8e8=",

  note: "Kredivo get detail invoice via serverside"
};

const akulaku = {
  BL_format_url:
    "https://www.bukalapak.com/payment/purchases/BL19143ZOBZ2INV/akulaku_redirect",

  url_redirect_1:
    "https://mall.akulaku.com/open-pay/pc/login?appId=34177070&refNo=BL19143ZL6V7INV&sign=xYH6gtuK0nJ_RG5T2WlIT3qqvpH7ev6xRBjTviIZ0aSJpqSVsivdRMpj3cX3xbbfScyDqGfKKU2ccJcc0sV7gg&lang=id&token=",

  url_redirect_2:
    "https://mall.akulaku.com/open-pay/pc/login?appId=34177070&refNo=BL19143ZOBZ2INV&sign=ocYmjHBZroqDBRSeHpdo6Yq-noXBWnAoo3J0nN5EA87YXWPXkfmpm5MtX5Zdo4qKQvlyZhTWvi8E6klegO_hAA&lang=id&token=",

  url_endpoint_get_detail_invoice_via_clientside:
    "https://id-app.akulaku.com/installment/api/json/public/openpay/order/info.do?appId=34177070&refNo=BL19143ZOBZ2INV&sign=ocYmjHBZroqDBRSeHpdo6Yq-noXBWnAoo3J0nN5EA87YXWPXkfmpm5MtX5Zdo4qKQvlyZhTWvi8E6klegO_hAA",

  res_get_detail_invoice:
  {
    "success": true,
    "sysTime": 1573537812298,
    "data": {
      "activity": {
        "id": 1128,
        "creatorUid": 13437051,
        "type": 1,
        "appIds": "[34177070]",
        "headerBanner": "",
        "footerBanner": "",
        "activityStartTime": 1573146000000,
        "activityEndTime": 1575133199999,
        "discountStartTime": 0,
        "discountEndTime": 0,
        "rule": "",
        "status": 3,
        "updateTime": 1573209247108,
        "createTime": 1573209247108,
        "appIdList": [
          34177070
        ],
        "countryId": 1
      },
      "orderDetails": [
        {
          "skuName": "Celana Pendek Pria Santai Celana Pantai ",
          "unitPrice": 123900.0,
          "discountPrice": 123900.0,
          "qty": 1
        },
        {
          "skuName": "Additional 192536338551",
          "unitPrice": 13548.0,
          "discountPrice": 13548.0,
          "qty": 1
        },
        {
          "skuName": "Biaya Pelayanan",
          "unitPrice": 4123.0,
          "discountPrice": 4123.0,
          "qty": 1
        }
      ],
      "plans": {
        "payments": {
          "1.0": [
            {
              "downPayment": 142000,
              "downPaymentRate": 1.0,
              "periods": 0,
              "monthlyPay": 0,
              "monthlyRate": 0.0000
            }
          ],
          "0.0": [
            {
              "downPayment": 0,
              "downPaymentRate": 0.0,
              "periods": 1,
              "monthlyPay": 147000,
              "monthlyRate": 0.0352
            },
            {
              "downPayment": 0,
              "downPaymentRate": 0.0,
              "periods": 2,
              "monthlyPay": 76000,
              "monthlyRate": 0.0312
            }
          ],
          "0.3": [
            {
              "downPayment": 43000,
              "downPaymentRate": 0.3,
              "periods": 1,
              "monthlyPay": 103000,
              "monthlyRate": 0.0352
            },
            {
              "downPayment": 43000,
              "downPaymentRate": 0.3,
              "periods": 2,
              "monthlyPay": 53000,
              "monthlyRate": 0.0312
            }
          ],
          "0.5": [
            {
              "downPayment": 71000,
              "downPaymentRate": 0.5,
              "periods": 1,
              "monthlyPay": 74000,
              "monthlyRate": 0.0352
            },
            {
              "downPayment": 71000,
              "downPaymentRate": 0.5,
              "periods": 2,
              "monthlyPay": 38000,
              "monthlyRate": 0.0312
            }
          ],
          "0.7": [
            {
              "downPayment": 100000,
              "downPaymentRate": 0.7,
              "periods": 1,
              "monthlyPay": 44000,
              "monthlyRate": 0.0352
            },
            {
              "downPayment": 100000,
              "downPaymentRate": 0.7,
              "periods": 2,
              "monthlyPay": 23000,
              "monthlyRate": 0.0312
            }
          ],
          "0.1": [
            {
              "downPayment": 15000,
              "downPaymentRate": 0.1,
              "periods": 1,
              "monthlyPay": 132000,
              "monthlyRate": 0.0352
            },
            {
              "downPayment": 15000,
              "downPaymentRate": 0.1,
              "periods": 2,
              "monthlyPay": 68000,
              "monthlyRate": 0.0312
            }
          ]
        },
        "riskResponsePeriods": `"[{\"downPaymentRate\":1,\"downPayment\":142000,\"periods\":0,\"interestInfo\":{\"principle\":142000,\"monthlyPay\":0,\"monthlyRate\":0.0000},\"isCount\":false},{\"downPaymentRate\":0,\"downPayment\":0,\"periods\":1,\"interestInfo\":{\"principle\":142000,\"monthlyPay\":147000,\"monthlyRate\":0.0352},\"isCount\":false},{\"downPaymentRate\":0.1,\"downPayment\":15000,\"periods\":1,\"interestInfo\":{\"principle\":128000,\"monthlyPay\":132000,\"monthlyRate\":0.0352},\"isCount\":false},{\"downPaymentRate\":0.3,\"downPayment\":43000,\"periods\":1,\"interestInfo\":{\"principle\":100000,\"monthlyPay\":103000,\"monthlyRate\":0.0352},\"isCount\":false},{\"downPaymentRate\":0.5,\"downPayment\":71000,\"periods\":1,\"interestInfo\":{\"principle\":71000,\"monthlyPay\":74000,\"monthlyRate\":0.0352},\"isCount\":f`
};
