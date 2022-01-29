const Category = require('../models/category')
const slugify = require('slugify')

function createCategory(categories,parentId=null){
   const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      type: cate.type,
      children: createCategory(categories, cate._id),
    });
  }

  return categoryList;
}

exports.addCategory = (req,res)=>{
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId
    }
    const cat = Category(categoryObj)
    cat.save((error, category) => {
        if (error) return res.status(404).json({ error })
        if (category) {
            return res.status(201).json({ category })
        }
    })

}
exports.getCategory = (req,res)=>{
    Category.find({})
    .exec((err,categories)=>{
        if(err) return res.status(404).json({
            err
        })
        if(categories){
            const categoryList = createCategory(categories)
            return res.status(202).json({categoryList})
        }
    })
}