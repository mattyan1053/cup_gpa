javascript:(
    function() {
        var i;
        var S=0,A=0,B=0,C=0,D=0,other=0;
        var gpaSum = 0, effectiveGpaSum = 0;
        var unitSum = 0, effectiveUnitSum = 0,unitSumAll = 0;
        var ifrmDoc = document.getElementById("main-frame-if");
        var doc = ifrmDoc.contentWindow.document;
        table = doc.getElementsByTagName("table").item(1).children[1];
        for(i=0;i<table.rows.length;i++){
            var unitNum = Number(table.rows[i].cells[6].innerText);
            record = table.rows[i].cells[9].innerText;
            var isEffective = (table.rows[i].cells[1].innerText != "その他");
            if(record == '不可') {
                gpaSum += 0;
                if(isEffective) effectiveGpaSum += 0;
                D += unitNum;
            }
            else if(record == '可') {
                gpaSum += 1 * unitNum;
                if(isEffective) effectiveGpaSum += 1 * unitNum;
                C += unitNum;
            }
            else if(record == '良') {
                gpaSum += 2 * unitNum;
                if(isEffective) effectiveGpaSum += 2 * unitNum;
                B += unitNum;
            }
            else if(record == '優') {
                gpaSum += 3 * unitNum;
                if(isEffective) effectiveGpaSum += 3 * unitNum;
                A += unitNum;
            }
            else if(record == '秀') {
                gpaSum += 4 * unitNum;
                if(isEffective) effectiveGpaSum += 4 * unitNum;
                S += unitNum;
            }
            else {
                other += unitNum;
                continue;
            }
            unitSum += unitNum;
            unitSumAll += unitNum;
            if(isEffective) effectiveUnitSum += unitNum;
        }
        alert("修得科目数: " + table.rows.length + "\n" + "修得単位数: " + unitSumAll + " (うち卒業要件に認められる単位数:" + effectiveUnitSum + ")" + "\n" + "秀:" + S + " 優:" + A + " 良:" + B + " 可:" + C + " 不可:" + D + " その他:" + other + "\n" + "GPA: " + (gpaSum / unitSum).toFixed(2) + " (うち卒業要件単位のGPA:" + (effectiveGpaSum / effectiveUnitSum).toFixed(2) + ")");
    }
)();
