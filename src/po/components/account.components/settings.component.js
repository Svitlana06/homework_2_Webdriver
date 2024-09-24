const BaseComponent = require('../common.components/base.component');

class SettingsComponent extends BaseComponent {
  constructor() {
    super('.tabbed-pane-main-col u-clearfix mod-wider');
  }

  get openFrequencyProperty() {
    return $('//label[text()="Частота"]/following-sibling::*');
  }
  get changeFrequency() {
    return $('//li[text()="Періодично"]');
  }
  get checkFrequency() {
    return $('//label[text()="Частота"]/following-sibling::div//div');
  }
}

module.exports = SettingsComponent;
