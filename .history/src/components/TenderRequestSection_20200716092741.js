import React from 'react'

const TenderRequestSection = (props) => {
    return (
        <div style={{ width: '100rem' }}>
            <div class="container float-left pt-1">
              <div class="row justify-content-md-left pb-2">
                <div class="col col-lg-2 font-weight-bold">
                  Request for Tender
              </div>
                <div class="col-md-auto">
                  Data
              </div>
              </div>
              <div class="row justify-content-md-left">
                <div class="col col-lg-2">
                  <p class="font-weight-bold">Tender State</p>
                </div>
                <div class="col-md-auto">
                  <p class="font-weight-light">Open</p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default TenderRequestSection
