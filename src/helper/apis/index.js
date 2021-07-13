import api from '@/helper'

// 查询订单详情
export function orderDetail(params) {
  return api({
    method: 'get',
    url: `/apiCashier/api/v1/international/cashier/h5/orderDetail/${params.orderNo}/${params.merchantId}/${params.country}`,
  })
}

// 输入卡号支付
export function inputCard(params) {
  return api({
    method: 'post',
    url: `/apiCashier/api/v1/international/cashier/h5/inputCard`,
    params,
  })
}
