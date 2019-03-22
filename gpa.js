javascript:(
    function() {
        var i;
        var S=0,A=0,B=0,C=0,D=0;
        var gpaSum = 0;
        var unit = 0;
        var ifrmDoc = document.getElementById("main-frame-if");
        var doc = ifrmDoc.contentWindow.document;
        table = doc.getElementsByTagName("table").item(1).children[1];
        for(i=0;i<table.rows.length;i++){
            var unitNum = Number(table.rows[i].cells[6].innerText);
            record = table.rows[i].cells[9].innerText;
            if(record == '不可') {
                gpaSum += 0;
                D += unitNum;
            }
            else if(record == '可') {
                gpaSum += 1 * unitNum;
                C += unitNum;
            }
            else if(record == '良') {
                gpaSum += 2 * unitNum;
                B += unitNum;
            }
            else if(record == '優') {
                gpaSum += 3 * unitNum;
                A += unitNum;
            }
            else if(record == '秀') {
                gpaSum += 4 * unitNum;
                S += unitNum;
            }
            else {
                continue;
            }
            unit += unitNum;
        }
        alert("取得科目数: " + table.rows.length + "\n" + "取得単位数: " + unit + "\n" + "秀:" + S + " 優:" + A + " 良:" + B + " 可:" + C + " 不可:" + D + "\n" + "GPA: " + (gpaSum / unit));
    }
)();
