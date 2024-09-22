import goal01Data from '../../../data/goal01/goal01.json';
import regionBeeswarmData from '../../../data/goal01/goal01.regionbeeswarm.json';
import povertyLineData from '../../../data/goal01/goal01.povertylines.json';
import povertyClimateData from '../../../data/goal01/goal01.povertyclimate.json';
import povertyProjectionData from '../../../data/goal01/goal01.povertyprojection.json';

export function load() {
  return {
    goal01: goal01Data,
    regionBeeswarmData: regionBeeswarmData,
    povertyLineData: povertyLineData,
    povertyClimateData: povertyClimateData,
    povertyProjectionData: povertyProjectionData
  };
}