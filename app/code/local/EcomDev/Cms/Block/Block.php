<?php

class EcomDev_Cms_Block_Block extends Mage_Core_Block_Abstract
{

    /**
     * Prepare Content HTML
     *
     * @return string
     */
    protected function _toHtml()
    {
        $blockId = $this->getBlockId();
        $html = '';
        if ($blockId) {
            $block = Mage::getModel('cms/block')
                    ->setStoreId(Mage::app()->getStore()->getId())
                    ->load($blockId);
            if ($block->getIsActive()) {
                $this->setBlockInstance($block);
                /* @var $helper Mage_Cms_Helper_Data */
                $helper = Mage::helper('cms');
                $processor = $helper->getBlockTemplateProcessor();
                $html = $processor->filter($block->getContent());
            }
        }
        return $html;
    }

}
