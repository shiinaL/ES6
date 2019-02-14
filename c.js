var model = requestData.bizModel;
Ext.PAIRest.request({
    url: 'last/reviewmrb',
    method: "POST",
    data: requestData.bizModel,
    success: function (data) {
        alert("新增成功")
    },
    failure: function (jsondata) {
        Ext.MessageBox.alert('提示', '操作失败');
    }
});

for (var i = 0; i < requestData.bizModel.datagrid1List.length; i++) {
    debugger
    item = requestData.bizModel.datagrid1List[i];
    if (item.Quantity > 0) {
        debugger;
        Ext.PAIRest.request({
            url: 'last/reviewmrb',
            method: "POST",
            data: {
                deviceGroup: item.DeviceGroup,
                deviceType: item.DeviceType,
                device: (item.Device != "") ? item.Device : item.Remark,
                quantity: item.Quantity,
                remark: item.Remark,
                deviceComment: item.DeviceComment
            },
            success: function (data) {
                alert("新增成功")
            },
            failure: function (jsondata) {
                Ext.MessageBox.alert('提示', '操作失败');
            }
        });
    }