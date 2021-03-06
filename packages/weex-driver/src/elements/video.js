
import {transformPropsAttrsToStyle, renamePropsAttr} from '../parseProps';

export default {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function(component) {
    const {props} = component;

    // modify props
    component.props = transformPropsAttrsToStyle(props, ['width', 'height']);
    component.props = renamePropsAttr(props, 'autoplay', 'auto-play');

    return component;
  }
};