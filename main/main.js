module.exports = function main(n) {
    //数字分为三层
    var flag=[['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']];
    var number=[];
    //获取数字的每一位数字
    while(true)
    {
        number.unshift(n%10);
        n=parseInt(n/10);
        if(n==0)
        {
            break;
        }
    }
    //输出的字符根据数字分别组合，一共三行
    var result='';
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<number.length;j++)
        {
            result+=flag[i][number[j]];
            if(j!=number.length-1)
            {
                result+=' ';
            }
        }
        result+='\n';
    }
    return result;
};