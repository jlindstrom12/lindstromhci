var year1week = {
    x: ['F21','S22','F22','S23'],
    y: [3.18, 3.63, 3.79, 3.82],
    mode: 'lines+text+markers',
    // text: ['3.2', '3.6', '3.79', '3.82'],
    textposition: 'top',
    name:'Semester',
    line: {
        color: 'rgb(61,61,61)'
    }
  };
  
  var year2week = {
    x: ['F21','S22','F22','S23'],
    y: [3.18, 3.4, 3.53, 3.61],
    mode: 'lines+text+markers',
    // text: [3.2, 3.2, 3.2],
    textposition: 'top',
    name:'Cumulative',
    line: {
      color: 'rgb(120,120,120)'
  }
  };
  
  
  var data = [ year1week, year2week ];
  
  var layout = {
    title:'GPA',
    xaxis:{title:{text:'Semester'}},
    yaxis:{title:{text:'GPA'}},
    paper_bgcolor: 'rgb(221,221,221)'
    
  };
  
  Plotly.newPlot('mydays', data, layout);