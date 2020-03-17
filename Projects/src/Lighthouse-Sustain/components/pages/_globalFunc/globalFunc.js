/**
 * This file contains all the functions that are reusable.
 */

 // return result for created for last three years 
export const getCreatedLastThreeYears = (data) => {
    // 1. copy an array 
    const items = [...data];
    // 2. iterate through array and get created date 
    let created = {};
    
    items.forEach(item => {
    //  console.log(elem);
      // get year 
      let year = new Date(item.Created).getFullYear();
      // @todo needs to change to last three years
      if (year === 2017 || year === 2018 || year === 2019) {
        // count 
        created[year] = (created[year] || 0) + 1; 
      }
    });

    let createdResults = [];
    for (let c in created) {
        // store values 
        createdResults.push(created[c]);
    }

    return createdResults; 
}


// return result for closed tickets for last three years
export const getClosedLastThreeYears = (data) => {
    // copy an array 
    const items = [...data];
    let closed = {};
    items.filter(function (item) {
        return item.State === 'closed successful';
      })
      .forEach(obj => {
      //  console.log(elem);
        // get year 
        let year = new Date(obj['Close Time']).getFullYear();
        if (year === 2017 || year === 2018 || year === 2019) {
          // count 
          closed[year] = (closed[year] || 0) + 1; 
        }
      });
  
      let closedResults = [];
      for (let c in closed) {
        closedResults.push(closed[c]);
      }
  
      return closedResults;
}

// get the result total number of years 
export const getTotalYears = (data) => {
    // copy an array 
    const arr = [...data];
    /***** Created Tickets */
    // define a result 
    let createdResults = [];
    // iterate through array
    arr.forEach(item => {
        // get created years 
        let createdYear = new Date(item.Created).getFullYear();
        // check if value doesnt exists 
        if (createdResults.indexOf(createdYear) === -1) {
            // then add it 
            createdResults.push(createdYear);
        }
    });

    /**** Close Tickets  */
    // define a result 
    let closedResults = [];
    // filter on 'closed successful'
    data.filter(item => {
        return item.State === 'closed successful';
    })
    // iterate through array
    .forEach(obj => {
        // get close time 
        let closeTime = new Date(obj['Close Time']).getFullYear();
        // check if value doesnt exists 
        if (closedResults.indexOf(closeTime) === -1) {
            // then add it 
            closedResults.push(closeTime);
        }
    });

    // check both length 
    if (createdResults.length > closedResults.length) {
        return createdResults;
    }

    return closedResults;
}

// return result for created tickets by monthly 
export const getCreatedTickets = (data) => {
    // copy an array 
    const arr = [...data];
    // define count to store key value pairs 
    const count = {};
    
    arr.filter(item => new Date(item.Created).getFullYear() === 2018)
        .map(cur => {
            // convert to date object 
            let createdMonth = new Date(cur.Created).getMonth();
            // month start from 1 
            if (createdMonth < 12) {
                createdMonth += 1;
            }
            // return result of all the months 
            return createdMonth;
        })
        .forEach(elem => {
            count[elem] = (count[elem] || 0) + 1;
        });

    const output = new Array(12).fill(0).map((cur, ind) => count[ind + 1] || cur);

    return output; 
}

// return result for closed tickets by monthly
export const getClosedTickets = (data) => {
    // copy an array 
    const arr = [...data];
    // define count to store key value pairs 
    const count = {};
    
    arr.filter(item => new Date(item['Close Time']).getFullYear() === 2018)
        .map(cur => {
            // convert to date object 
            let month = new Date(cur['Close Time']).getMonth();
            // month start from 1 
            if (month < 12) {
                month += 1;
            }
            // return result of all the months 
            return month;
        })
        .forEach(elem => {
            count[elem] = (count[elem] || 0) + 1;
        });

    const output = new Array(12).fill(0).map((cur, ind) => count[ind + 1] || cur);

    return output; 
}

// return result for created tickets by quarterly 
export const getCreatedQuarterly = (data) => {
    // copy 
    const arr = [...data];

    let result = {};
    arr.filter(item => {
        return new Date(item.Created).getFullYear() === 2018;
    })
    .forEach(elem => {
        // get month 
        let month = new Date(elem.Created).getMonth();
        // add 1 
        if (month < 12) {
            month += 1;
        }

        if (month >= 1 && month <= 3) {
            result.Q1 = (result.Q1 || 0) + 1;
        } else if (month >= 4 && month <= 6) {
            result.Q2 = (result.Q2 || 0) + 1;
        } else if (month >= 7 && month <= 9) {
            result.Q3 = (result.Q3 || 0) + 1;
        } else if (month >= 10 && month <= 12) {
            result.Q4 = (result.Q4 || 0) + 1;
        }  
    });

    // convert to array and assign each key value pairs 
    const output = Object.values(Object.assign({Q1: 0, Q2: 0, Q3: 0, Q4: 0}, result));

    return output;
}

// return result for closed tickets by quarterly 
export const getClosedQuarterly = (data) => {
    // copy an array 
    const arr = [...data];

    let result = {};

    arr.filter(item => {
        return (new Date(item['Close Time']).getFullYear() === 2018 && item.State === 'closed successful');
    })
    .forEach(elem => {
        // get month 
        let month = new Date(elem['Close Time']).getMonth();
        // add 1 
        if (month < 12) {
            month += 1;
        }

        if (month >= 1 && month <= 3) {
            result.Q1 = (result.Q1 || 0) + 1;
        } else if (month >= 4 && month <= 6) {
            result.Q2 = (result.Q2 || 0) + 1;
        } else if (month >= 7 && month <= 9) {
            result.Q3 = (result.Q3 || 0) + 1;
        } else if (month >= 10 && month <= 12) {
            result.Q4 = (result.Q4 || 0) + 1;
        }  
    });

    // convert to array and assign each key value pairs 
    const output = Object.values(Object.assign({Q1: 0, Q2: 0, Q3: 0, Q4: 0}, result));

    return output;
}

// Get weekly data 
