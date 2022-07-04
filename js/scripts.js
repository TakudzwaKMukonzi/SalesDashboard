// SIDEBAR TOOGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar()
{
	if(!sidebarOpen)
	{
		sidebar.classList.add
		("sidebar-responsive");
		sidebarOpen = true;
	}

}


function closeSidebar()
{
	if(sidebarOpen)
	{
		sidebar.classList.remove("sidebar-responsive");
		sidebarOpen = false;
	}
}

var barChartOption =
{
	series:
	[{	
		data:[10, 8, 6, 4, 2]
	}],

	chart:
	{
		type: 'bar',
	    height: 350, 
	    toolbar:
	    {
	    	show: false
	    }
	},

	colors:
	[
		"#246dec",
		"#cc3c43",
		"#367952",
		"#f5b741",
		"#4f35a1"
	],

	plotOptions
	{
		bar:
		{
			distrubuted: true,
			borderRadius: 4,
			horizontal: false,
			columnwidth: '40%'
		}
	},

	dataLabels:
	{
		enabled: false
	},

	legend:
	{
		show: false
	},

	xaxis:
	{
		categories:
		[
			"Laptop",
			"Phone",
			"Monitor",
			"Headphones",
			"Camera"
		],
	},

	yaxis:
	{
		title:
		{
			text:"count"
		}
	}
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// AREA CHARTS

var areChartOptions =
{
	series: 
	[{
		name: 'Purchase Orders',
		data: [31, 40, 28, 51, 42, 109, 100]
	},
		{
			name: 'Sales Orders',
			data: [11, 32, 45, 34, 52, 41]
		}


	],

	charts:
	{
		height: 350,
		type: 'area',
		toolbar:
		{
			show: false,
		},
	},

	colors: ["#4f35a1", "#246dec"],
	dataLabels:
	{
		enabled: false,
	},

	stroke:
	{
		curve: 'smooth'
	},

	labels: ["Jan","Feb","Mar","Apr","May","Jun", "Jul"],
	makers:
	{
		size: 100
	},

	yaxis:
	[
	{
		title:
		{
			text: 'Purchase Orders',
		},
	},

	{
		opposite: true,
	    title:
	    {
			text: 'Sales Orders',
	    },
	},
	],
	
	tooltip:
	{
		shared: true,
		intersect: false,
	}
};

var areChart = new ApexCharts(document.querySelector("#area-chart"), areChartOptions);
areChart.render();