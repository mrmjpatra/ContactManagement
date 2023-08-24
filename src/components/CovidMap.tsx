import axios from 'axios';
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useQuery } from 'react-query';
const CovidMap = () => {
    const { data: countriesData } = useQuery('countriesData', async () => {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        return response.data;
    });
    return (
        <div id='map' className='h-[90vh]'>
            <div className="p-4 bg-white shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-4">Country Data</h2>
                <div className='h-[50vh]'>
                    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {countriesData?.map((country: any) => (
                            <Marker
                                key={country.country}
                                position={[country.countryInfo.lat, country.countryInfo.long]}
                            >
                                <Popup>
                                    <div>
                                        <h3 className="font-semibold">{country.country}</h3>
                                        <p>Active Cases: {country.active}</p>
                                        <p>Recovered Cases: {country.recovered}</p>
                                        <p>Deaths: {country.deaths}</p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default CovidMap