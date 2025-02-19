Page({
  data: {
    foodList: ['烤肉', '水饺', '拉面', '炒饭', '寿司', '意面', '披萨', '烤肉'],
    rotateAngle: 0,
    isRotating: false
  },

  startRotation: function() {
    if (this.data.isRotating) return;
    
    const targetAngle = this.data.rotateAngle + 3600 + Math.random() * 360;
    
    this.setData({
      isRotating: true,
      rotateAngle: targetAngle
    });

    setTimeout(() => {
      this.setData({
        isRotating: false
      });
      
      const finalAngle = targetAngle % 360;
      const itemAngle = 360 / this.data.foodList.length;
      const index = Math.floor((360 - finalAngle) / itemAngle);
      
      wx.showToast({
        title: '今天吃：' + this.data.foodList[index],
        icon: 'none',
        duration: 2000
      });
    }, 4000);
  }
})