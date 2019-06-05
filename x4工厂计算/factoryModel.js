/*
//
[
	{
		"name":"",				//string-工厂名
		"force":"",				//string-工厂势力
		"product":"{}",			//object-产品名
		"material":"{}",		//object-原料
		"buildResource":"{}",	//object-建造材料
		"workers":"",			//number-需要的工人数量
		"factoryType":""		//string-工厂类型-可选(基础产品、中间产品、最终产品、食药业、违法产品、飞船制造维护、居住区)
	}
]*/
(function () {
	"use strict";
	//保存工厂数据。

	//同步加载工厂数据给_factoryData 。
	/*
	$.ajax({
		url:"factoryData.json",
		async:false,
		success:function(jdata){
			_factoryData=jdata;
		}
	});
	*/



	//获取工厂数据的副本。
	function GetFactoryData() {
		return JSON.parse(JSON.stringify(_factoryData));
	}
	//获取产品列表对象，用于统计总产量。格式为{"产品名"：0,"产品名"：0,...}
	function GetProductListO() {
		var productListO = {};
		for (const d of _factoryData) {
			for (var i in d.product) {
				productListO[i] = 0;
			}
		}
		return productListO;
	}
	//获取原材料列表对象，用于统计原材料总需求量。格式为{"原料名"：0,"原料名"：0,...}
	function GetMaterialListO() {
		var materialListO = {};
		for (const d of _factoryData) {
			for (var i in d.materials) {
				materialListO[i] = 0;
			}
		}
		return materialListO;
	}
	//获取工厂列表对象，用于统计工厂数量。格式为{"工厂名"：0,"工厂名"：0,...}
	function GetFactoryListO() {
		var factoryListO = {};
		for (const d of _factoryData) {
			factoryListO[d.name] = 0;
		}
		return factoryListO;
	}


	if (!window.factoryCalculator) {
		window.factoryCalculator = {};
	}
	window.factoryCalculator.factoryModel = {
		GetFactoryData: GetFactoryData,
		GetProductListO: GetProductListO,
		GetMaterialListO: GetMaterialListO,
		GetFactoryListO: GetFactoryListO
	};

	var _factoryData = [{
		"name": "能量电池产线",
		"force": "all",
		"product": {
			"能量电池": 12000
		},
		"materials": {
			"工人": 60
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "基础产品"
	}, {
		"name": "精炼金属产线",
		"force": "all",
		"product": {
			"精炼金属": 2400
		},
		"materials": {
			"能量电池": 2160,
			"金属矿石": 5760,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "基础产品"
	}, {
		"name": "硅晶片产线",
		"force": "all",
		"product": {
			"硅晶片": 2400
		},
		"materials": {
			"能量电池": 1800,
			"硅": 4800,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "基础产品"
	}, {
		"name": "石墨产线",
		"force": "all",
		"product": {
			"石墨": 1650
		},
		"materials": {
			"能量电池": 1200,
			"甲烷": 4800,
			"工人": 120
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "基础产品"
	}, {
		"name": "超流体冷却剂产线",
		"force": "all",
		"product": {
			"超流体冷却剂": 1650
		},
		"materials": {
			"能量电池": 900,
			"氦": 4800,
			"工人": 120
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "基础产品"
	}, {
		"name": "反物质单元产线",
		"force": "all",
		"product": {
			"反物质单元": 3300
		},
		"materials": {
			"能量电池": 3000,
			"氢": 9600,
			"工人": 120
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "基础产品"
	}, {
		"name": "水产线",
		"force": "all",
		"product": {
			"水": 6600
		},
		"materials": {
			"能量电池": 1800,
			"冰": 9600,
			"工人": 120
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "食用肉产线",
		"force": "all",
		"product": {
			"食用肉": 1760
		},
		"materials": {
			"能量电池": 320,
			"水": 800,
			"工人": 75
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "香料产线",
		"force": "all",
		"product": {
			"香料": 2880
		},
		"materials": {
			"能量电池": 240,
			"水": 480,
			"工人": 60
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "小麦产线",
		"force": "all",
		"product": {
			"小麦": 3240
		},
		"materials": {
			"能量电池": 360,
			"水": 960,
			"工人": 75
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "食品配给产线",
		"force": "all",
		"product": {
			"食品配给": 4920
		},
		"materials": {
			"能量电池": 600,
			"食用肉": 600,
			"香料": 300,
			"小麦": 600,
			"工人": 90
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "Argon医疗物资产线",
		"force": "A",
		"product": {
			"医疗物资": 1440
		},
		"materials": {
			"能量电池": 480,
			"香料": 360,
			"水": 720,
			"小麦": 264,
			"工人": 90
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "Paranid医疗物资产线",
		"force": "P",
		"product": {
			"医疗物资": 1440
		},
		"materials": {
			"能量电池": 480,
			"香料": 360,
			"水": 720,
			"白豆": 120,
			"工人": 90
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "Teladi医疗物资产线",
		"force": "T",
		"product": {
			"医疗物资": 1440
		},
		"materials": {
			"能量电池": 480,
			"香料": 360,
			"水": 720,
			"日出花": 96,
			"工人": 90
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "太空燃料产线",
		"force": "all",
		"product": {
			"太空燃料": 900
		},
		"materials": {
			"能量电池": 300,
			"水": 750,
			"小麦": 600,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "违法产品"
	}, {
		"name": "微芯片产线",
		"force": "all",
		"product": {
			"微芯片": 480
		},
		"materials": {
			"能量电池": 300,
			"硅晶片": 1200,
			"工人": 300
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "量子管产线",
		"force": "all",
		"product": {
			"量子管": 550
		},
		"materials": {
			"能量电池": 200,
			"石墨": 580,
			"超流体冷却剂": 150,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "等离子导体产线",
		"force": "all",
		"product": {
			"等离子导体": 200
		},
		"materials": {
			"能量电池": 240,
			"石墨": 384,
			"超流体冷却剂": 560,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "先进复合材料产线",
		"force": "all",
		"product": {
			"先进复合材料": 720
		},
		"materials": {
			"能量电池": 600,
			"石墨": 960,
			"精炼金属": 960,
			"工人": 210
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "扫描阵列产线",
		"force": "all",
		"product": {
			"扫描阵列": 240
		},
		"materials": {
			"能量电池": 360,
			"精炼金属": 600,
			"硅晶片": 360,
			"工人": 210
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "船体部件产线",
		"force": "all",
		"product": {
			"船体部件": 880
		},
		"materials": {
			"能量电池": 320,
			"石墨": 160,
			"精炼金属": 1120,
			"工人": 180
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "引擎部件产线",
		"force": "all",
		"product": {
			"引擎部件": 480
		},
		"materials": {
			"能量电池": 240,
			"反物质单元": 320,
			"精炼金属": 384,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "炮塔部件产线",
		"force": "all",
		"product": {
			"炮塔部件": 400
		},
		"materials": {
			"能量电池": 120,
			"微芯片": 40,
			"量子管": 40,
			"扫描阵列": 20,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "先进电子设备产线",
		"force": "all",
		"product": {
			"先进电子设备": 300
		},
		"materials": {
			"能量电池": 300,
			"微芯片": 220,
			"量子管": 100,
			"工人": 360
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "护盾部件产线",
		"force": "all",
		"product": {
			"护盾部件": 660
		},
		"materials": {
			"能量电池": 210,
			"等离子导体": 60,
			"量子管": 60,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "励磁线圈产线",
		"force": "all",
		"product": {
			"励磁线圈": 1200
		},
		"materials": {
			"能量电池": 360,
			"等离子导体": 240,
			"量子管": 258,
			"工人": 540
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "反物质转换器产线",
		"force": "all",
		"product": {
			"反物质转换器": 1800
		},
		"materials": {
			"能量电池": 960,
			"先进复合材料": 240,
			"微芯片": 360,
			"工人": 720
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "智能芯片产线",
		"force": "all",
		"product": {
			"智能芯片": 480
		},
		"materials": {
			"能量电池": 300,
			"硅晶片": 120,
			"工人": 40
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "导弹部件产线",
		"force": "all",
		"product": {
			"导弹部件": 1320
		},
		"materials": {
			"能量电池": 80,
			"先进复合材料": 8,
			"船体部件": 8,
			"工人": 15
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "无人机组件产线",
		"force": "all",
		"product": {
			"无人机组件": 360
		},
		"materials": {
			"能量电池": 180,
			"引擎部件": 60,
			"船体部件": 60,
			"微芯片": 60,
			"扫描阵列": 120,
			"工人": 450
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "武器部件产线",
		"force": "all",
		"product": {
			"武器部件": 400
		},
		"materials": {
			"能量电池": 120,
			"船体部件": 40,
			"等离子导体": 60,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "纳米计算机产线",
		"force": "all",
		"product": {
			"纳米计算机": 480
		},
		"materials": {
			"能量电池": 560,
			"量子管": 400,
			"微芯片": 640,
			"反物质单元": 400,
			"工人": 810
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "最终产品"
	}, {
		"name": "日出花产线",
		"force": "all",
		"product": {
			"日出花": 1200
		},
		"materials": {
			"能量电池": 360,
			"水": 960,
			"工人": 75
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "沼泽植物产线",
		"force": "all",
		"product": {
			"沼泽植物": 960
		},
		"materials": {
			"能量电池": 360,
			"水": 800,
			"工人": 75
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "违法产品"
	}, {
		"name": "白豆产线",
		"force": "all",
		"product": {
			"白豆": 1440
		},
		"materials": {
			"能量电池": 360,
			"水": 960,
			"工人": 78
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "艳耀蜗牛产线",
		"force": "all",
		"product": {
			"艳耀蜗牛": 1392
		},
		"materials": {
			"能量电池": 320,
			"水": 800,
			"工人": 78
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "滋养油产线",
		"force": "all",
		"product": {
			"滋养油": 3840
		},
		"materials": {
			"能量电池": 480,
			"水": 480,
			"香料": 240,
			"日出花": 480,
			"工人": 120
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "白豆荚产线",
		"force": "all",
		"product": {
			"白豆荚": 3840
		},
		"materials": {
			"能量电池": 480,
			"白豆": 480,
			"香料": 240,
			"艳耀蜗牛": 480,
			"工人": 99
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "太空药草产线",
		"force": "all",
		"product": {
			"太空药草": 1350
		},
		"materials": {
			"能量电池": 840,
			"沼泽植物": 720,
			"香料": 240,
			"工人": 0
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "食药业"
	}, {
		"name": "艳耀星尘产线",
		"force": "all",
		"product": {
			"艳耀星尘": 480
		},
		"materials": {
			"能量电池": 240,
			"艳耀蜗牛": 720,
			"香料": 360,
			"工人": 123
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "违法产品"
	}, {
		"name": "T材料产线",
		"force": "all",
		"product": {
			"T材料": 2400
		},
		"materials": {
			"能量电池": 1350,
			"金属矿石": 8400,
			"工人": 180
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "基础产品"
	}, {
		"name": "Teladi船体部件产线",
		"force": "T",
		"product": {
			"船体部件": 880
		},
		"materials": {
			"能量电池": 320,
			"石墨": 160,
			"T材料": 816,
			"工人": 180
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "Teladi先进复合材料产线",
		"force": "T",
		"product": {
			"先进复合材料": 720
		},
		"materials": {
			"能量电池": 600,
			"石墨": 960,
			"T材料": 696,
			"工人": 210
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "Teladi引擎部件产线",
		"force": "T",
		"product": {
			"引擎部件": 480
		},
		"materials": {
			"能量电池": 240,
			"反物质单元": 320,
			"T材料": 280,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "Teladi扫描阵列产线",
		"force": "T",
		"product": {
			"扫描阵列": 240
		},
		"materials": {
			"能量电池": 360,
			"硅晶片": 360,
			"T材料": 438,
			"工人": 150
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "中间产品"
	}, {
		"name": "太空烟草产线",
		"force": "all",
		"product": {
			"太空烟草": 1350
		},
		"materials": {
			"能量电池": 840,
			"香料": 240,
			"艳耀蜗牛": 720,
			"工人": 90
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "违法产品"
	}, {
		"name": "Teladi生物群落S",
		"force": "T",
		"product": {
			"工人": 250
		},
		"materials": {
			"滋养油": "143",
			"医疗物资": "169"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Teladi生物群落M",
		"force": "T",
		"product": {
			"工人": 500
		},
		"materials": {
			"滋养油": "285",
			"医疗物资": "338"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Teladi生物群落L",
		"force": "T",
		"product": {
			"工人": 1000
		},
		"materials": {
			"滋养油": "570",
			"医疗物资": "675"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Paranid穹顶S",
		"force": "P",
		"product": {
			"工人": 333
		},
		"materials": {
			"白豆荚": "238",
			"医疗物资": "225"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Paranid穹顶M",
		"force": "P",
		"product": {
			"工人": 666
		},
		"materials": {
			"白豆荚": "476",
			"医疗物资": "450"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Paranid穹顶L",
		"force": "P",
		"product": {
			"工人": 999
		},
		"materials": {
			"白豆荚": "714",
			"医疗物资": "675"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Argon居住区S",
		"force": "A",
		"product": {
			"工人": 250
		},
		"materials": {
			"食品配给": "282",
			"医疗物资": "169"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Argon居住区M",
		"force": "A",
		"product": {
			"工人": 500
		},
		"materials": {
			"食品配给": "563",
			"医疗物资": "338"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "Argon居住区L",
		"force": "A",
		"product": {
			"工人": 1000
		},
		"materials": {
			"食品配给": "1125",
			"医疗物资": "675"
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "居住区"
	}, {
		"name": "S/M级飞船制造港",
		"force": "all",
		"product": {},
		"materials": {
			"工人": 200
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "飞船制造维护"
	}, {
		"name": "S/M级飞船维护港",
		"force": "all",
		"product": {},
		"materials": {
			"工人": 200
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "飞船制造维护"
	}, {
		"name": "L级飞船制造港",
		"force": "all",
		"product": {},
		"materials": {
			"工人": 500
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "飞船制造维护"
	}, {
		"name": "L级飞船维护港",
		"force": "all",
		"product": {},
		"materials": {
			"工人": 500
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "飞船制造维护"
	}, {
		"name": "XL级飞船制造港",
		"force": "all",
		"product": {},
		"materials": {
			"工人": 500
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "飞船制造维护"
	}, {
		"name": "XL级飞船维护港",
		"force": "all",
		"product": {},
		"materials": {
			"工人": 500
		},
		"buildResource": {
			"纳米计算机": 0,
			"能量电池": 0,
			"船体部件": 0
		},
		"factoryType": "飞船制造维护"
	}
					   ];


})();
