<?php

/**
 * Customer login form block
 *
 * @category   EcomDev
 * @package    EcomDev_Bootstrap
 * @author     Chris Jones <leeked@gmail.com>
 */
class EcomDev_Mbootstrap_Block_Customer_Form_Login extends Mage_Customer_Block_Form_Login
{
    /**
     * Override parent functionality so Form_Login block can be used
     * without having it override every page title.
     */
    protected function _prepareLayout()
    {
        return Mage_Core_Block_Template::_prepareLayout();
    }
}
