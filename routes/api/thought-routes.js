const router = require('express').Router();
const {
    addThought,
    getAllThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
    removeReaction,
    deleteReaction


} = require('../../controllers/thought-controllers');

router.route('/').get(getAllThought);
router.route('/:userId').post(addThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
