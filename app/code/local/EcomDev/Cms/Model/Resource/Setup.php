<?php

class EcomDev_Cms_Model_Resource_Setup extends Mage_Core_Model_Resource_Setup
{

    /**
     * Example
     * $data = array(
     * "cms-block-footer-links"=>array(
     *  "title"=>"Some Title"
     *  "content"=>"Some Content Here"
     *  )
     * )
     * Create blocks from data array
     *
     * @param array $blocks
     * @return Babypark_Cms_Model_Resource_Setup
     */
    public function installBlocks(array $blocks, $storeId = null)
    {
        $blockTable = $this->getTable('cms/block');
        $select = $this->getConnection()->select()
                ->from(array("block" => $blockTable), array('identifier', 'block_id'))
                ->where('identifier in (?)', array_keys($blocks));
        $storeId = is_numeric($storeId) ? (int) $storeId : 0;
        $select->join(array("store" => $this->getTable("cms/block_store")), "store.block_id = block.block_id")
                ->where("store.store_id = ?", $storeId);
        $installedBlocks = $this->getConnection()->fetchPairs($select);
        foreach ($blocks as $blockIdentifier => $blockData) {
            /** @var $block Mage_Cms_Model_Block */
            $blockId = null;
            $block = Mage::getModel('cms/block');
            if (isset($installedBlocks[$blockIdentifier])) {
                $block->setStoreId($storeId)->load($blockIdentifier, 'identifier');
                $blockId = $installedBlocks[$blockIdentifier];
            }
            /** clean everything in block */
            $block->addData(array('stores' => array($storeId)));
            $block->addData($blockData);
            $block->setIdentifier($blockIdentifier);
            $block->setId($blockId);
            $block->save();
        }
        return $this;
    }

    /**
     * Remove block with given identifier
     *
     * @param $blockIdentifier
     * @return Babypark_Cms_Model_Resource_Setup
     */
    public function removeBlock($blockIdentifier, $store = null)
    {
        /** @var $cmsBlock Mage_Cms_Model_Block */
        $cmsBlock = Mage::getModel('cms/block')->getCollection()
                ->addFieldToFilter("identifier", $blockIdentifier);
        if ($store !== "all") {
            $cmsBlock->getSelect()
                    ->join(array("store" => $this->getTable("cms/block_store")), "store.block_id = main_table.block_id")
                    ->where("store.store_id in(?)", $store);
        }
        foreach ($cmsBlock as $block) {
            $block->delete();
        }
        return $this;
    }

    /**
     * Page Installer/Updater
     */
    public function installPage(array $pages, $storeId = null)
    {
        $pageTable = $this->getTable('cms/page');
        $select = $this->getConnection()->select()
                ->from(array("page" => $pageTable), array('identifier', 'page_id'))
                ->where('identifier in (?)', array_keys($pages));
        $storeId = is_numeric($storeId) ? (int) $storeId : 0;
        $select->join(array("store" => $this->getTable("cms/page_store")), "store.page_id = page.page_id")
                ->where("store.store_id = ?", $storeId);
        $installedPages = $this->getConnection()->fetchPairs($select);
        foreach ($pages as $pageIdentifier => $pageData) {
            /** @var $page Mage_Cms_Model_Page */
            $pageId = null;
            $page = Mage::getModel('cms/page');
            if (isset($installedPages[$pageIdentifier])) {
                $page->setStoreId($storeId)->load($pageIdentifier, 'identifier');
                $pageId = $installedPages[$pageIdentifier];
            }
            /** clean everything in page */
            $page->addData(array('stores' => array($storeId)));
            $page->addData($pageData);
            $page->setIdentifier($pageIdentifier);
            $page->setId($pageId);
            $page->save();
        }
        return $this;
    }

    public function removePage($id, $store = null)
    {
        /** @var $cmsBlock Mage_Cms_Model_Page */
        $cms = Mage::getModel('cms/page')->getCollection()
                ->addFieldToFilter("identifier", $id)
        ;
        if ($store !== "all") {
            $cms->getSelect()
                    ->join(array("store" => $this->getTable("cms/page_store")), "store.page_id = main_table.page_id")
                    ->where("store.store_id in(?)", $store)
            ;
        }
        foreach ($cms as $page) {
            $page->delete();
        }

        return $this;
    }

}

