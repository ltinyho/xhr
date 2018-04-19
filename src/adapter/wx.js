function wxAdaPter(request,) {
  wx.request({
    url: request.url,
    method: request.method,
    data: request.body,
    header:request.headers,
    dataType
    success(res){

    },
    fail(res){

    }
  });
}